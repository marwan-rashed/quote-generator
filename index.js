import quotes from "./quotes.js";

export function generateQuote() {
    const idx = parseInt(Math.random() * (quotes.length - 1));

    console.log(quotes[idx]);
}

generateQuote();