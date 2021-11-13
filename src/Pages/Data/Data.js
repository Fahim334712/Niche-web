import React, { useEffect, useState } from 'react';
import UseAuth from '../Firebase/UseAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const Data = () => {
    const { user } = UseAuth();
    const [order, setOrder] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/orders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [])
    return (
        <div>
            <h2>Total Order : {order.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell >Product</TableCell>
                            <TableCell >Price</TableCell>
                            <TableCell >Address</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {order.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell >{row.product}</TableCell>
                                <TableCell >{row.price}</TableCell>
                                <TableCell >{row.address}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Data;