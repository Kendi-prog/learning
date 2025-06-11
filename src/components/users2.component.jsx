import { users } from "./users.component";

export default function SoftwareDeveloperList() {
    const developer = users.filter((user) => user.career === 'Software Developer');
    const developerList = developer.map((dev) => {
        return (
            <ul key={dev.id}>
                <li>Name: {dev.name}</li>
                <li>Email: {dev.email}</li>
                <li>Is Online: {dev.isOnline.toString()}</li>
                <li>Career: {dev.career}</li>
            </ul>
        )
    })

    return (
        <div>
            {developerList}
        </div>
    )
}