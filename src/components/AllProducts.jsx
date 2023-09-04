import React from 'react'
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

AllProducts.propTypes = {
    hijoAPadre: PropTypes.func
}

export default function AllProducts({hijoAPadre}) {
    
    const navigate = useNavigate();
    
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productsList, setProductsList] = useState([]);

 


  useEffect(() => {fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((json) => setProductsList(json))
    },[])


  const renderSkeleton = (products) =>{
    return products.map((product)=>{
        return (
                <Grid 
                    key={product.id} 
                    xs={12} sm={6} md={4} lg={3} 
                    display= "flex"   
                > 
                    <Box justifyContent={"center"} onClick={() => {navigate("/product"); hijoAPadre(product)}}>
                        {/*<AllProductsSkeleton/>*/} 
                        <img src={product.image} alt={product.title} width={200} height={200} />
                        <h4>{product.title}</h4>
                        <h3>Price: {product.price}</h3>
                    </Box>
                    
                </Grid>)}
    )
}

return (

    <>
        <Grid container spacing={2}>
           { renderSkeleton(productsList)}
        </Grid>
    </>

)
}