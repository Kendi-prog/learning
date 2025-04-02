type CardProps = {
    name: string;
    age: number;
    isPremium: boolean;
}

function CardChild({ name, age, isPremium }: CardProps) {
    return(
        <div className="card">
            <h1>Username on the card is {name}</h1>
            <h2>Age on the card is {age}</h2>
            <h3>Premium status on the card is {isPremium ? "isPremium" : "not premium"}</h3>
        </div>
    )
}


export default function CardParent2({ name, age, isPremium }: CardProps){
    return(
        <div>
          <CardChild name={name} age={age} isPremium={isPremium}/>
        </div>
    );
}