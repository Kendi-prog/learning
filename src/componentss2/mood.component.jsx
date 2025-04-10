import { useState } from "react";




export default function Mood() {
    const [happy, setHappy] = useState(""); 
    const [sad, setSad] = useState("");
    const [angry, setAngry] = useState("");
    const [neutral, setNeutral] = useState("");
    const [excited, setExcited] = useState("");
    const [confused, setConfused] = useState("");

    const[mood, setMood] = useState("");

    const handleHappy = () => {
        setHappy(happy + "😊");
        setMood("happy");
    }
        
    const handleSad = () => {
        setSad(sad + "😢");
        setMood("sad");
    }

    const handleAngry = () => {
        setAngry(angry + "😡");
        setMood("angry");
    }

    const handleNeutral = () => { 
        setNeutral(neutral + "😐");
        setMood("neutral");
    }

    const handleExcited = () => {
        setExcited(excited + "🤩")
        setMood("excited");
    }

    const handleConfused = () => setConfused(confused + "😕");

    const handleReset = () => {
        setHappy("");
        setSad("");
        setAngry("");
        setNeutral("");
        setExcited("");
        setConfused("");
    }

    return (
        <div>
            <h1>Mood Tracker</h1>
            <div className="mood-card-container">
                <h2 className="mood-card">Happy : {happy}</h2>
                <h2 className="mood-card">Sad : {sad}</h2>
                <h2 className="mood-card">Angry : {angry} </h2>
                <h2 className="mood-card">Neutral : {neutral} </h2>
                <h2 className="mood-card">Excited : {excited}</h2>
                <h2 className="mood-card">Confused : {confused}</h2>
            </div>
            <div>
                <span>Happy was picked  ➡️ {Array.from(happy).length} times </span>
                <span>Sad was picked  ➡️ {Array.from(sad).length} times </span>
                <span>Angry was picked  ➡️ {Array.from(angry).length} times </span>
                <span>Neutral was picked  ➡️ {Array.from(neutral).length} times </span>
                <span>Excited was picked  ➡️ {Array.from(excited).length} times </span>
                <span>Confused was picked  ➡️ {Array.from(confused).length} times </span>
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
            
            <button onClick={handleHappy}>Happy</button>
            <button onClick={handleSad}>Sad</button>
            <button onClick={handleAngry}>Angry</button>
            <button onClick={handleNeutral}>Neutral</button>
            <button onClick={handleExcited}>Excited</button>
            <button onClick={handleConfused}>Confused</button>
            <button onClick={handleReset}>Reset</button>

        </div>
    )
}