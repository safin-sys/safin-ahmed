import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            new URL("https://github.com/safin-sys.png"),
            new URL("https://raw.githubusercontent.com/safin-sys/*/*/logo.png"),
        ],
    },
};

export default nextConfig;
