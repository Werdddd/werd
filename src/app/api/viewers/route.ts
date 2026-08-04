import { NextResponse } from "next/server";
import { getRedis } from "@/lib/redis";

// Sliding-window presence: each visitor's id is scored by the timestamp of
// their last heartbeat. Anything older than the window is pruned before
// counting, so a closed tab silently ages out without needing cleanup.
const VIEWERS_KEY = "live-viewers";
const WINDOW_MS = 20_000;

async function pruneAndCount() {
  const redis = getRedis();
  if (!redis) return null;

  const now = Date.now();
  const pipeline = redis.pipeline();
  pipeline.zremrangebyscore(VIEWERS_KEY, 0, now - WINDOW_MS);
  pipeline.zcard(VIEWERS_KEY);
  const [, count] = await pipeline.exec<[number, number]>();
  return count;
}

export async function GET() {
  const count = await pruneAndCount();
  if (count === null) {
    return NextResponse.json({ error: "not configured" }, { status: 503 });
  }
  return NextResponse.json({ count });
}

export async function POST(request: Request) {
  const redis = getRedis();
  if (!redis) {
    return NextResponse.json({ error: "not configured" }, { status: 503 });
  }

  let id: unknown;
  try {
    ({ id } = await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (typeof id !== "string" || id.length < 8 || id.length > 100) {
    return NextResponse.json({ error: "Invalid visitor id." }, { status: 400 });
  }

  const now = Date.now();
  const pipeline = redis.pipeline();
  pipeline.zadd(VIEWERS_KEY, { score: now, member: id });
  pipeline.zremrangebyscore(VIEWERS_KEY, 0, now - WINDOW_MS);
  pipeline.zcard(VIEWERS_KEY);
  const [, , count] = await pipeline.exec<[number, number, number]>();

  return NextResponse.json({ count });
}
