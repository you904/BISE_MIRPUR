"use client"
import React from 'react'

function Login() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [error, setError] = useState('');
    // const [success, setSuccess] = useState('');
    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
        
    //     // Create item object
    //     const credintials = { email, password };

    //     try {
    //         // Send POST request to API
    //         const response = await fetch('/api/users/login', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(credintials),
    //         });

    //         if (!response.ok) {
    //             throw new Error('Failed to create item');
    //         }

    //         const data = await response.json();
    //         console.log(data);
            
    //         setSuccess('Item created successfully!');
    //         setEmail('');
    //         setPassword('');
    //     } catch (error: any) {
    //         setError(error.message);
    //     }
    // };
  return (
    <div>
    {/* <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Name:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">password:</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit"> Login</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>} */}
        </div>
 
  )
}

export default Login