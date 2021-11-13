import React, { useEffect, useState } from 'react';
import ProductsHome from './Home/ProductsHome/ProductsHome';



const Load = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setDatas(data));
    }, [])
    return (
        <div>
            <h2 className=" mt-5 container man">Exploring Devices...</h2>
            <div className="dataGrid  container">
                {
                    datas.map(data => <ProductsHome key={data._id} data={data}></ProductsHome>)
                }

            </div>
        </div>
    );
};

export default Load;