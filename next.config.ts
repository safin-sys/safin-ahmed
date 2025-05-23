import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            new URL("https://avatars.githubusercontent.com/u/61120114?v=4"),
            new URL("https://raw.githubusercontent.com/safin-sys/*/*/logo.png"),
        ],
    },
};

export default nextConfig;
