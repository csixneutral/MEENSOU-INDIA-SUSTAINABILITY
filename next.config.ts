import type { NextConfig } from "next";

// Hostinger's Node.js plan imports this object and forces standalone output.
// HOSTINGER_EXPORT=1 builds a static site for public_html instead.
const hostingerStatic = process.env.HOSTINGER_EXPORT === "1";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  ...(hostingerStatic
    ? {
        output: "export",
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {
        images: {
          formats: ["image/avif", "image/webp"],
        },
      }),
};

export default nextConfig;
