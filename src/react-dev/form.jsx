import { useState } from "react";

export default function FormChange() {
    const [person, setPerson] = useState({
        firstName: 'Kendi',
        lastName: 'Leila',
        email: 'kendileila@gmail.com'
    });

    const handleFirstNameChange = (e) => {
        setPerson({
            ...person,
            firstName : e.target.value
        })
    }

    const handleLastNameChange = (e) => {
        setPerson({
            ...person,
            lastName: e.target.value
        })
    }

    const handleEmailChange = (e) => {
        setPerson({
            ...person,
            email: e.target.value
        })
    }

    return (
        <div>
            <label>
                FirstName:
                <input
                    type="text"
                    value={person.firstName}
                    onChange={handleFirstNameChange} 
                />
            </label>
            <label>
                LastName:
                <input
                    type="text"
                    value={person.lastName}
                    onChange={handleLastNameChange} 
                /> 
            </label>
            <label>
                Email:
                <input
                    type="text"
                    value={person.email}
                    onChange={handleEmailChange} 
                />
            </label>
          
            <p>{person.firstName} {person.lastName} ({person.email})</p>
        </div>
    )
}