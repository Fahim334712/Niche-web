import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Header from '../Home/Header/Header';
import './Products.css';

const Products = () => {
    const history = useHistory();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allproducts')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const goForm = () => {
        history.push('/form');
    }

    return (
        <div >
            <Header></Header>
            <h2 className=" bac mt-3 ">Different types of Calculator here...</h2>
            <div className="dataGrid container">
                {
                    products.map(product => <div key={product._id}>

                        <div>
                            <img className="picSize" src={product.picture} alt="" />
                            <h6>Model : <span className="fw-bold">{product.name}</span></h6>
                            <h6>Price : <span className="fw-bold">{product.balance}</span></h6>
                            <h6>Company : <span className="fw-bold">{product.company}</span></h6>
                        </div>
                        <div className="card-footer">
                            <Button onClick={goForm} variant="success">Buy Now</Button>
                        </div>

                    </div>)
                }
            </div>

        </div>


    );
};

export default Products;








