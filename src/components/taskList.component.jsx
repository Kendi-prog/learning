export default function TaskList({ tasks }) {
    return(
        <div>
            {tasks.map((task) => {
                return(
                    <li key={task.id}>
                        <p>Task name: {task.name}</p>
                        <p>Task ID: {task.id}</p>
                        <p>Task completed: {task.completed.toString()}</p>
                    </li>  
                )
             
            })}
        </div>
    )
}