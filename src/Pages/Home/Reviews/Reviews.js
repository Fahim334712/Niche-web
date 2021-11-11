import React, { useEffect, useState } from 'react';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setreviews] = useState([]);
    useEffect(() => {
        fetch('./reviewData.json')
            .then(res => res.json())
            .then(data => setreviews(data));
    }, [])
    return (
        <div className="container mb-2">
            <h2 className="left ">This is Review</h2>
            <section className="dataGridd">
                {
                    reviews.map(review => <div className="dataGrids">
                        <img className="sise" src={review.picture} alt="" />
                        <h6 className="fw-bold">{review.name}</h6>
                        <p>{review.guid}</p>
                    </div>)
                }
            </section>
        </div>
    );
};

export default Reviews;
