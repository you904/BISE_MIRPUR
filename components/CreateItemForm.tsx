// import { useState } from 'react';

const CreateItemForm = () => {
    // const [name, setName] = useState('');
    // const [price, setPrice] = useState('');
    // const [error, setError] = useState<string | null>(null);
    // const [success, setSuccess] = useState<string | null>(null);
    
    // const deleteItem = async()=>{
    //     const deleteItem = {id:name}
    //     try {
    //         const response = await fetch('/api/posts',{
    //             method:"DELETE",
    //             headers:{
    //                 'Content-Type': 'application/json',
    //             },
    //             body:JSON.stringify(deleteItem)    
    //         })
    //         if (!response.ok) {
    //             throw new Error('Failed to create item');
    //         }

    //         const data = await response.json();
    //         setSuccess('Item deleted successfully!');
    //         setName('');
    //         setPrice('');
       
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }
    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
        
    //     // Create item object
    //     const newItem = { name, price };

    //     try {
    //         // Send POST request to API
    //         const response = await fetch('/api/posts', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(newItem),
    //         });

    //         if (!response.ok) {
    //             throw new Error('Failed to create item');
    //         }

    //         const data = await response.json();
    //         setSuccess('Item created successfully!');
    //         setName('');
    //         setPrice('');
    //     } catch (error) {
    //         // (error.message);
    //     }
    // };

    return (
        <div>
            {/* <h2>Create New Item</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input
                        id="price"
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Create Item</button>
            </form>
                <button onClick={deleteItem}>Delete Item</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>} */}
        </div>
    );
};

export default CreateItemForm;
