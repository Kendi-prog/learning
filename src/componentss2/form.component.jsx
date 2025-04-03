export default function Form(){
    // const onhandleSubmit = (e) => {
    //     e.preventDefault();
    //     e.stopPropagation();
    // }
    const search = (formData) => {
        const query = formData.get('query');
        const role = formData.get('role');
        alert(`Query: ${query}, Role: ${role}`);
    }

    return(
        <div>
            <form action={search}>
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