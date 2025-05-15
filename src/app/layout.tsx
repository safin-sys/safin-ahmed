import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

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
            <body
                className={`${futura.variable} ${inter.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
