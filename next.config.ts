import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/lakbay/download",
        destination:
          "https://apps.apple.com/eg/app/lakbay-travel-companion/id6819170936",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
