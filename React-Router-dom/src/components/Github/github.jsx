import React, { useState } from "react";

const GEMINI_ENDPOINT =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";



function Github() {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function askAI() {
    setError("");
    setAnswer("");
    if (!prompt.trim()) {
      setError("⚠️ Please enter a prompt");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`${GEMINI_ENDPOINT}?key=${API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error?.message || "API Error");
      }

      const text =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "⚠️ No response received";

      setAnswer(text);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-white  flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">🤖 AI Review </h1>

      
      <textarea
        rows="6"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder=" Type your prompt here..."
        className="w-full max-w-2xl rounded-lg border border-gray-700   p-4 mb-4 text-sm focus:ring-2 focus:ring-white focus:outline-none"
      />

      <div className="flex gap-3 mb-6">
        <button
          onClick={askAI}
          disabled={loading}
          className="bg-orange-600 text-white hover:bg-orange-600 px-5 py-2 rounded font-medium disabled:opacity-50"
        >
          {loading ? "Thinking..." : "Ask AI"}
        </button>
        <button
          onClick={() => {
            setPrompt("");
            setAnswer("");
            setError("");
          }}
          className="bg-gray-700 text-white hover:bg-gray-600 px-5 py-2 rounded-lg font-medium"
        >
          Clear
        </button>
      </div>

    
      <div className="w-full max-w-2xl rounded-lg border border-gray-700  p-4 min-h-[200px] whitespace-pre-wrap">
        {error && <p className="text-red-400">{error}</p>}
        {loading && <p className="text-gray-400">Generating response...</p>}
        {!loading && !error && answer && <p>{answer}</p>}
        {!loading && !error && !answer && (
          <p className="text-gray-500">AI output will appear here...</p>
        )}
      </div>
    </div>
  );
}

export default Github;
