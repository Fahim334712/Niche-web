
import React, { useRef } from 'react';

const AddProducts = () => {

    const nameRef = useRef();
    const textRef = useRef();
    const urlRef = useRef();

    const handleForm = e => {
        const name = nameRef.current.value;
        const balance = textRef.current.value;
        const picture = urlRef.current.value;
        const newUser = { name, balance, picture };
        fetch('http://localhost:5000/allproducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product Added Successfully');
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Add Products</h2>
            <form onSubmit={handleForm} className="mt-3 ">
                <input type="text" placeholder=" photo url" ref={urlRef} /><br />
                <p><input type="text" placeholder="Product name" ref={nameRef} /><br /></p>
                <input type="text" placeholder="Price" ref={textRef} />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddProducts;