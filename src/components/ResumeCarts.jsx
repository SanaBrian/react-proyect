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
import { useNavigate } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import Routes from "./Routes"

ResumeCarts.propTypes = {
    userId: PropTypes.number,
    hijoAPadre: PropTypes.func,
}


export default function ResumeCarts({userId}, {hijoAPadre}) {

    //navSingleProduct(row.productId)

    const [cartsList, setCartsList] = useState([]);
    const [productsList, setProductsList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((json) => setProductsList(json))
    },[])


    function navSingleProduct(productId){
        //console.log("productsList: " + productsList);
        const selectProduct = productsList.filter((obj) => obj.id === productId)
        
        return selectProduct
        
        //<Routes productTable = {selectProduct} />
        //navigate("/product");
    }

    

    useEffect(() => {fetch("https://fakestoreapi.com/carts/user/" + userId)
        .then((response) => response.json())
        .then((json) => setCartsList(json))
        },[])

  
    return (
        <Card variant="outlined">
            {cartsList.map((cart, index) => (
                <nav aria-label="main mailbox folders">
                    <TableContainer component={Paper} key={index} >
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
                                        onClick={() => {let obj = navSingleProduct(row.productId); console.log(obj);
                                            hijoAPadre(obj)}}
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
