import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { PropTypes } from 'prop-types'
import { useParams } from  "react-router"


SingleProduct.propTypes = {
    singleProduct: PropTypes.object
}

export default function SingleProduct({singleProduct}) {

    let { id } = useParams();
   
  return (
    <>
        <Card sx={{display:"flex"}} >
            <Box sx={{display: "flex", flexDirection: 'column' }}>
                <CardMedia 
                    component="img"
                    image={singleProduct.image}
                    alt={singleProduct.title}
                />
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography gutterBottom variant="h4" component="div">
                        {singleProduct.title}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        {singleProduct.category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {singleProduct.description}
                    </Typography>
                    <Typography gutterBottom variant="h4" component="div">
                        {singleProduct.price} USD
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    </>
  )
}
