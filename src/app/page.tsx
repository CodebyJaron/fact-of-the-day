"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

interface Category {
    id: string;
    emoji: string;
    label: string;
}

const categories: Category[] = [
    { id: "random", emoji: "🎲", label: "Random" },
    { id: "history", emoji: "📜", label: "History" },
    { id: "number", emoji: "🔢", label: "Numbers" },
];

interface Fact {
    category: string;
    text: string;
}

export default function Home() {
    const [currentFact, setCurrentFact] = useState<Fact | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState("random");

    const loadFact = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const res = await fetch(`/api/fact?&category=${selectedCategory}`);
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const json = await res.json();
            setCurrentFact(json);
        } catch {
            setError("Failed to load fact. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }, [selectedCategory]);

    useEffect(() => {
        loadFact();
    }, [loadFact]);

    const getRandomFact = () => {
        loadFact();
    };

    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-violet-500 to-purple-700 text-white">
            <header className="flex justify-between items-center p-4 bg-black/20 backdrop-blur-sm">
                <time
                    dateTime={today.toISOString()}
                    className="text-sm font-medium"
                >
                    {formattedDate}
                </time>
                <h1 className="text-sm font-medium">Fact of the day</h1>
            </header>

            <main className="flex-1 flex flex-col items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md"
                    role="region"
                    aria-label="Fact content"
                >
                    <Card className="bg-white/10 backdrop-blur-md border-none shadow-xl overflow-hidden">
                        <CardContent className="p-6">
                            <nav aria-label="Fact categories">
                                <div className="flex flex-wrap justify-center gap-2 mb-6">
                                    {categories.map((category) => (
                                        <Button
                                            key={category.id}
                                            variant={
                                                selectedCategory === category.id
                                                    ? "default"
                                                    : "outline"
                                            }
                                            size="sm"
                                            className={`rounded-full ${
                                                selectedCategory === category.id
                                                    ? "bg-white text-purple-700 hover:bg-white/90"
                                                    : "bg-white/10 border-none hover:bg-white/20"
                                            }`}
                                            onClick={() =>
                                                setSelectedCategory(category.id)
                                            }
                                            aria-pressed={
                                                selectedCategory === category.id
                                            }
                                            aria-label={`Select ${category.label} category`}
                                        >
                                            <span
                                                className="text-lg mr-2"
                                                aria-hidden="true"
                                            >
                                                {category.emoji}
                                            </span>
                                            {category.label}
                                        </Button>
                                    ))}
                                </div>
                            </nav>

                            {isLoading ? (
                                <div
                                    className="flex justify-center items-center h-[200px]"
                                    role="status"
                                    aria-label="Loading fact"
                                >
                                    <div
                                        className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"
                                        aria-hidden="true"
                                    ></div>
                                </div>
                            ) : error ? (
                                <div
                                    className="text-center text-red-300 h-[200px] flex items-center justify-center"
                                    role="alert"
                                    aria-live="assertive"
                                >
                                    {error}
                                </div>
                            ) : currentFact ? (
                                <motion.p
                                    key={currentFact.text}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-xl font-medium text-center leading-relaxed"
                                    role="article"
                                    aria-label={`${currentFact.category} fact`}
                                >
                                    {currentFact.text}
                                </motion.p>
                            ) : null}
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mt-8"
                >
                    <Button
                        onClick={getRandomFact}
                        disabled={isLoading}
                        className="bg-white text-purple-700 hover:bg-white/90 rounded-full px-8 font-medium"
                        aria-label="Get new fact"
                    >
                        <RefreshCw
                            className={`h-4 w-4 mr-2 ${
                                isLoading ? "animate-spin" : ""
                            }`}
                            aria-hidden="true"
                        />
                        New fact
                    </Button>
                </motion.div>
            </main>
        </div>
    );
}
