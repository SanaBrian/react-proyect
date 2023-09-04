import { Card, Divider } from "@mui/material"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

ResumeCarts.propTypes = {
    userId: PropTypes.number
}


export default function ResumeCarts(id) {

    const [cartsList, setCartsList] = useState([]);
    

    useEffect(() => {fetch("https://fakestoreapi.com/carts/user/" + toString(id))
        .then((response) => response.json())
        .then((json) => setCartsList(json))
        },[])

  
    return (
        <Card variant="outlined">
            {cartsList.map((cart) => (
                <nav aria-label="main mailbox folders">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>{new Date(cart.date).toLocaleDateString()}</TableCell>
                                    <TableCell align="right">Total  </TableCell>     
                                </TableRow>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell align="right">Quantity</TableCell>  
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    cart.products.map((row) => (
                                        <TableRow
                                        onClick={()=> console.log()}
                                        key={row.productId}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.productId}
                                            </TableCell>
                                            <TableCell align="right">{row.quantity}</TableCell>
                                        </TableRow>
                                        )
                                    )
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Divider />
                </nav>)
                
            )}
        </Card>
  )
}
