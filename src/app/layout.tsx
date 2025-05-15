import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const futura = localFont({
    src: "../fonts/futura-md-bt.ttf",
    weight: "400",
    style: "normal",
    variable: "--font-heading",
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
