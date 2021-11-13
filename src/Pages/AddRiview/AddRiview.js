
import React, { useRef } from 'react';

const AddRiview = () => {

    const nameRef = useRef();
    const textRef = useRef();
    const urlRef = useRef();

    const handleForm = e => {
        const name = nameRef.current.value;
        const guid = textRef.current.value;
        const picture = urlRef.current.value;
        const newUser = { name, guid, picture };
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Blog Added Successfully,Reload Please');
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Add your review</h2>
            <form onSubmit={handleForm} className="mt-3 ">
                <input type="text" placeholder="Your photo url" ref={urlRef} /><br />
                <p>Name : <input type="text" placeholder="Your Name" ref={nameRef} /><br /></p>
                <textarea rows="4" cols="50" ref={textRef} className="jhhh">
                    Enter Blogs here...</textarea><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddRiview;