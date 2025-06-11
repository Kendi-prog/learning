import { useState } from "react";

export default function FakeLogin () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState<'typing' | 'loading' | 'success'>('typing');
    const [error, setError] = useState<null | Error>(null);

    if(status === 'success') return<h1>Login Successful</h1>
    

    async function handleSubmit (e : React.FormEvent) {
        e.preventDefault();
        setStatus('loading');
        setError(null);
        
        try {
            await fakeLogin(username, password);
            setStatus('success');
        } catch(err) {
            setStatus('typing');
            setError(err as Error);
        }
    }

    function fakeLogin (name: string, pass: string) {
        return new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                if(name ==='admin' && pass === '1234') {
                    resolve();
                } else {
                    reject(new Error('Invalid Credentials'));
                }
            }, 2000);
        })
    }

    return(
        <>
            <h2>Fake login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    disabled={status === 'loading'} />
                <br />
                <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={status === 'loading'}/>
                <br />
                <button
                    type="submit"
                    disabled={
                        status === "loading" ||
                        username.trim() === '' ||
                        password.trim() === ''
                    }>
                    {status === 'loading' ? 'checking' : 'submit'}
                </button>

                {error && <p style={{ color: 'crimson' }}>{error.message}</p>}
            </form>
        </>
    )
}