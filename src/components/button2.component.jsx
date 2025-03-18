export default function Button2({ count, handleClick }) {
    return (
        <button onClick={handleClick}>
            My Button2 count: {count}
        </button>
    )
}