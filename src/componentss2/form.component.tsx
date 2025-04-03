import './form.styles.css';


export default function Form(){
    // const onhandleSubmit = (e) => {
    //     e.preventDefault();
    //     e.stopPropagation();
    // }
    const search = (e: React.FormEvent<HTMLFormElement>) => {
        e.stopPropagation();
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const query = formData.get('query') as string;
        const role = formData.get('role') as string;
        alert(`Query: ${query}, Role: ${role}`);
    }

    return(
        <div onClick={() => alert('Div Clicked')} className="div-form">
            <form onSubmit={search}>
                <input 
                    type="text"
                    name="query"
                />
                <select name="role" typeof="dropdown">
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                    <option value="Guest">Guest</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}