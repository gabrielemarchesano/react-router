import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductsPage(){
  
  const productsEndpoint = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(productsEndpoint)
      .then(response => {
        console.log(response.data);
        setProducts(response.data);
      })
  }, [])

  return(
    <>
      <ul>
        {
          products.map((product) => (
            <li>
              <img width={100} src={product.image} alt="" />
              <h5>{product.title}</h5>
              <small>Price: {product.price}$</small>
              <p>{product.description}</p>
            </li>
          ))
        }
      </ul>
    </>
  )
}