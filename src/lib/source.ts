interface HistoryEvent {
    year: string;
    text: string;
}

interface UselessFact {
    text: string;
}

interface NumberFact {
    text: string;
    num: number;
}

export async function fetchFactsByDate(
    month: number,
    day: number
): Promise<HistoryEvent[]> {
    try {
        const res = await fetch(
            `https://history.muffinlabs.com/date/${month}/${day}`
        );
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        return data.data.Events;
    } catch (error) {
        console.error("Error fetching history facts:", error);
        return [];
    }
}

export async function fetchRandomUselessFact(): Promise<UselessFact> {
    try {
        const res = await fetch(
            `https://uselessfacts.jsph.pl/api/v2/facts/random`
        );
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return await res.json();
    } catch (error) {
        console.error("Error fetching random fact:", error);
        return { text: "Failed to fetch random fact" };
    }
}

export async function fetchNumberFact(): Promise<NumberFact> {
    try {
        const num = Math.floor(Math.random() * 100);
        const res = await fetch(`http://numbersapi.com/${num}/trivia`);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const text = await res.text();
        return { text, num };
    } catch (error) {
        console.error("Error fetching number fact:", error);
        return { text: "Failed to fetch number fact", num: 0 };
    }
}
