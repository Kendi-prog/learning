import './styles.css'

export default function Card({ title, description, children }) {
    return(
        <div className="card">
            <h3>{title}</h3>
            {children}
            <span>{description}</span>
        </div>
    )
}