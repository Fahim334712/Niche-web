import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './ProductsHome.css';

const ProductsHome = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('./homedata.json')
            .then(res => res.json())
            .then(data => setDatas(data));
    }, [])
    return (
        <div className="mt-3 container">
            <h2 className="left container ">Exploring Devices...</h2>
            <div className="dataGrid">
                {
                    datas.map(data => <div key={data._id}>
                        {
                            data.index < 6 && <div className="card">
                                <img className="card-img-top" src={data.picture} alt="" />

                                <div className="card-body">
                                    <h5 className="card-title">fahim</h5>

                                </div>
                                <div className="card-footer">
                                    <Button variant="success">Booking Now</Button>
                                </div>
                            </div>
                        }


                    </div>)
                }
            </div>
        </div>
    );
};

export default ProductsHome;