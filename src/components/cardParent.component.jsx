import Card from "./card.component"

export default function CardParent() {
    return(
        <div>
            <Card
                title="Lock-in time"
                description="this is a short description of the card component as I am learning to using 
                props and passing them as well as passing children as props"
            >
                <img 
                    src="https://images.unsplash.com/photo-1728044849242-516700295875?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
                    alt="coffee and phone photo"
                    width={300}
                    height={300}
                />
                <button>I am just a button</button>
            
            </Card>
            <Card
                title="Nature"
                description="this is another description and i am thinking of making it a nature one
                even though i havent even looked for the right image for the card"
            >
                <img 
                    src="https://images.unsplash.com/photo-1742201408341-29204ea79380?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
                    alt="cold mountains"
                    width={300}
                    height={300}
                />
                <button>I am just a button</button>
            </Card>
        </div>
    )
}