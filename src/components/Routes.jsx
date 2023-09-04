import { useRoutes } from "react-router-dom";
import AllProducts from "./AllProducts"
import AllUserCarts from "./AllUserCarts";
import SingleProduct from "./SingleProduct"
import ResumeCarts from "./ResumeCarts";
import { useState } from "react";


export default function Routes() {

  const [singleProduct, estableceDatos] = useState({});

  const hijoAPadre = (product) => {
    estableceDatos(product);
      
  }
  

  let element = useRoutes([
    {
      path: "/",
      element: <AllProducts />,
    },
    { path: "products", 
      element: <AllProducts hijoAPadre={hijoAPadre} /> 
    },
    { path: "users", 
      element: <AllUserCarts />
    },
    {
      path:"product",
      element: <SingleProduct singleProduct = {singleProduct} />
    },
    { path: "*", 
      element: <AllProducts /> 
    }
  ]);
  return element;
}
