import React from 'react';
import { Button } from 'react-bootstrap';

import Details from '../../Details/Details';
import './ProductsHome.css';

const ProductsHome = ({ data }) => {
    const { name, picture, index, balance, company } = data;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <div className="mt-3 container">
                <div>
                    {
                        index < 6 &&
                        <div>
                            <img className="picSize" src={picture} alt="" />
                            <h6>Model : <span className="fw-bold">{name}</span></h6>
                            <h6>Price : <span className="fw-bold">{balance}</span></h6>
                            <h6>Company : <span className="fw-bold">{company}</span></h6>

                            <div className="card-footer">
                                <Button onClick={handleOpen} variant="success">Buy Now</Button>
                            </div>
                        </div>

                    }
                </div>
            </div>
            <Details
                data={data}
                open={open}
                handleClose={handleClose}
            ></Details>

        </>
    );
};

export default ProductsHome;