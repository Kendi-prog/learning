const person = {
    name: "Leila Kendi",
    theme: {
        background: "black",
        color : "pink"
    },
    education: "University Level",
    skills: "Web development"
}

export default function Person() {
    return (
        <div style={person.theme}>
            <h1>{person.name} is an amazing leader and friend</h1>
            <img 
                src="https://plus.unsplash.com/premium_photo-1674055047918-87672ee689f5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="lady holding a mug"
                style={{width: '100px', height:'100px'}}
            />
            <li>Her education level is {person.education}</li>
            <li>She has majored in {person.skills} and she is really great at it.</li>
            <li>I love her so much.</li>
               
        </div>

    )
}