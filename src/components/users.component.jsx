export const users = [
    {
        id: 1, 
        name: 'Kendi', 
        email: 'k@gmail.com', 
        isOnline: true, 
        career: 'Software Developer'
    },
    {
        id: 2, 
        name: 'Leila', 
        email: 'l@gmail.com', 
        isOnline: true, 
        career: 'Cloud Engineer'
    },
    {
        id: 3, 
        name: 'Joy', 
        email: 'j@gmail.com', 
        isOnline: true, 
        career: 'Data Scientist'
    },
    {
        id: 4, 
        name: 'Muriungi', 
        email: 'm@gmail.com', 
        isOnline: true, 
        career: 'Software Developer'
    },
    {
        id: 5, 
        name: 'Edith', 
        email: 'e@gmail.com', 
        isOnline: true, 
        career: 'Software Developer'
    },
];


// function User() {

// }



export default function UsersList(){
    return (
        <div>
            {users.map(user => {
                return (
                   <ul key={user.id}>
                          <li>Name: {user.name}</li>
                          <li>Email: {user.email}</li>
                          <li>Is Online: {user.isOnline.toString()}</li>
                          <li>Career: {user.career}</li>
                   </ul>
                )
            })}
        </div>
    )
}