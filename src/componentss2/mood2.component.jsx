import { useState } from "react";


export default function Mood2() {
    const [mood, setMood] = useState(""); // Single state to track the current mood
    const [emoji, setEmoji] = useState(""); // Single state to track the current emoji

    const handleMoodChange = (newMood, newEmoji) => {
        setMood(newMood);
        setEmoji(newEmoji);
    };

    const handleReset = () => {
        setMood("");
        setEmoji("");
    };

    return (
        <div>
            <h1>Mood Tracker</h1>
            <div className="mood-card-container">
                <h2 className="mood-card">Mood: {emoji}</h2>
            </div>
            <h3>
                {
                    mood === "happy" ? "You are glowing today!" :
                    mood === "sad" ? "Don't worry, tomorrow will be better!" :
                    mood === "angry" ? "Take a deep breath!" :
                    mood === "neutral" ? "Just another day!" :
                    mood === "excited" ? "That's the spirit!" :
                    mood === "confused" ? "It's okay to be unsure!" :
                    "How are you feeling today?"
                }
            </h3>
            
            <button onClick={() => handleMoodChange("happy", "😊")}>Happy</button>
            <button onClick={() => handleMoodChange("sad", "😢")}>Sad</button>
            <button onClick={() => handleMoodChange("angry", "😡")}>Angry</button>
            <button onClick={() => handleMoodChange("neutral", "😐")}>Neutral</button>
            <button onClick={() => handleMoodChange("excited", "🤩")}>Excited</button>
            <button onClick={() => handleMoodChange("confused", "😕")}>Confused</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}