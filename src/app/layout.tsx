import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

const futura = localFont({
    variable: "--font-heading",
    src: [
        {
            path: "../fonts/futura-light-bt.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../fonts/futura-md-bt.ttf",
            weight: "500",
            style: "normal",
        },
    ],
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-ui",
});

export const metadata: Metadata = {
    title: "Safin Ahmed | Portfolio",
    description: "Portfolio of Safin Ahmed",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Script
                src="https://pulsed.pages.dev/pulse.js"
                data-api-key="an_76318b20cbdb8503477e134573cfd1a31a3d1335d957f5ee6de24763f48dfc1a"
            />
            <body
                className={`${futura.variable} ${inter.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
