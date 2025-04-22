import { useState } from "react";

let nextId = 3;
const initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye'},
    { id: 2, name: 'Louise Nevelson'},
];

export default function InsertingArray() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState(initialArtists);

    const handleInsertingArrayClick = () => {
       const insertAt = 3;
       const nextArtists = [
            ...artists.slice(0, insertAt),
            { id : nextId++, name: name },
            ...artists.slice(insertAt)
       ] 
       setArtists(nextArtists);
       setName('');
    }

    return(
        <>
            <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleInsertingArrayClick}>Insert</button>
            <ul>
                {artists.map(artist => 
                    <li key={artist.id}>
                        {artist.name}
                    </li>
                )}
            </ul>
           
        </>
    )

}