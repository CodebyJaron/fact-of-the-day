import "./globals.css";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://fact.codebyjaron.nl"),
    title: "Fact of the Day - Daily Interesting Facts",
    description:
        "Discover a new interesting fact every day! Get random facts about history, numbers, and more.",
    keywords:
        "facts, daily facts, interesting facts, history facts, number facts, random facts",
    authors: [{ name: "Jaron de Klein" }],
    openGraph: {
        title: "Fact of the Day - Daily Interesting Facts",
        description:
            "Discover a new interesting fact every day! Get random facts about history, numbers, and more.",
        type: "website",
        locale: "nl_NL",
        url: "https://fact.codebyjaron.nl",
        siteName: "Fact of the Day",
        images: [
            {
                url: "/logo.jpeg",
                width: 1200,
                height: 630,
                alt: "Fact of the Day Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Fact of the Day - Daily Interesting Facts",
        description:
            "Discover a new interesting fact every day! Get random facts about history, numbers, and more.",
        images: ["/logo.jpeg"],
    },
    manifest: "/manifest.json",
    themeColor: "#7c3aed",
    viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    appleWebApp: {
        capable: true,
        statusBarStyle: "default",
        title: "Fact of the Day",
    },
    alternates: {
        canonical: "https://fact.codebyjaron.nl",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
        ],
        apple: [
            {
                url: "/apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png",
            },
        ],
    },
};

export const viewport: Viewport = {
    themeColor: "#7c3aed",
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/icon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/icon-16x16.png"
                />
                <link rel="manifest" href="/manifest.json" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="default"
                />
                <meta
                    name="apple-mobile-web-app-title"
                    content="Fact of the Day"
                />
            </head>
            <body className="antialiased">{children}</body>
        </html>
    );
}
