function Man({ person, size }) {
    return(
        <img 
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
            alt={person.name}
            width={size}
            height={size}
            />
    )
}

export default function Avatar() {
    return(
        <div>
           <Man 
                person={{name: "jamlick", age: 41}}
                size= {200}   
            /> 
            <Man 
                person={{name: "jamlick", age: 41}}
                size= {100}   
            /> 
            <Man 
                person={{name: "jamlick", age: 41}}
                size= {50}   
            /> 
        </div>
    )
}
