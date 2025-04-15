import { NextResponse } from "next/server";
import {
    fetchFactsByDate,
    fetchRandomUselessFact,
    fetchNumberFact,
} from "@/lib/source";

type FactCategory = "history" | "random" | "number";

interface Fact {
    category: FactCategory;
    text: string;
}

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const category = searchParams.get("category") as FactCategory | null;
        const date =
            searchParams.get("date") || new Date().toISOString().split("T")[0];

        const [, month, day] = date.split("-").map(Number);

        const facts: Fact[] = [];

        if (!category || category === "history") {
            const history = await fetchFactsByDate(month, day);
            if (history.length > 0) {
                const chosen =
                    history[Math.floor(Math.random() * history.length)];
                facts.push({
                    category: "history",
                    text: `${chosen.year}: ${chosen.text}`,
                });
            }
        }

        if (!category || category === "random") {
            const useless = await fetchRandomUselessFact();
            facts.push({ category: "random", text: useless.text });
        }

        if (!category || category === "number") {
            const number = await fetchNumberFact();
            facts.push({ category: "number", text: number.text });
        }

        if (facts.length === 0) {
            return NextResponse.json(
                { error: "No facts found" },
                { status: 404 }
            );
        }

        const fact = facts[Math.floor(Math.random() * facts.length)];
        return NextResponse.json(fact);
    } catch (error) {
        console.error("Error fetching facts:", error);
        return NextResponse.json(
            { error: "Failed to fetch facts" },
            { status: 500 }
        );
    }
}
