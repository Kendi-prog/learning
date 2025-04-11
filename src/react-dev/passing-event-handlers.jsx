function Button ({ onClick, children }) {
    return <button onClick={onClick}>{children}</button>
}

function PlayButton ({ movieName}) {
    function handleClick () {
        alert(`Playing ${movieName}`);
    }

    return <Button onClick={handleClick}>Play {movieName}</Button>;
}

function UploadButton () {
    return <Button onClick={() => alert("Uploading...")}>Upload image</Button>;

}

export default function Toolbar () {
    return (
        <div>
            <PlayButton movieName="Kendi the sweet girl" />
            <UploadButton />
        </div>
    )
}