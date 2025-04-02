import './cardprops.style.css';

type CardProps = {
    name: string;
    age: number;
    isPremium: boolean;
}

function CardChild({ name, age, isPremium }: CardProps) {
    return(
        <div className="card">
            <h2>Username : {name}</h2>
            <h2>Age : {age}</h2>
            <h2>Premium : {isPremium ? "isPremium" : "not premium"}</h2>
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