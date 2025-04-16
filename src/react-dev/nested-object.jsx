import { useState } from "react";

export default function NestedForm () {
    const [artist, setArtist] = useState({
        name: 'Kendileila',
        artwork: {
            title: 'lady-bug',
            city: 'Nairobi',
            imageUrl: 'https://i.imgur.com/Sd1AgUOm.jpg'
        }
    });

    const handleTitleChange = (e) => {
        setArtist({
            ...artist,
            artwork: {
                ...artist.artwork,
                title: e.target.value
            }
        })
    }

    return (
        <div>
            <label>
                Title:
                <input 
                    type="text"
                    value={artist.artwork.title}
                    onChange={handleTitleChange}
                />
            </label>
        </div>
    )
}