import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Page Not Found - Fact of the Day",
    description: "The page you&apos;re looking for doesn&apos;t exist.",
};

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-violet-500 to-purple-700 text-white p-4">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-xl mb-8">
                The page you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
                href="/"
                className="bg-white text-purple-700 hover:bg-white/90 rounded-full px-8 py-3 font-medium transition-colors"
            >
                Go back home
            </Link>
        </div>
    );
}
