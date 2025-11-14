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
        <div className="row row-cols-1 row-cols-md-3">
          {
            products.map((product) => (
              <li className="list-unstyled" key={product.id}>
          
                <div className="card rounded-0">
                  <div className="border-bottom border-1">
                    <img src={product.image} alt=""className="card-img-top product-image"/>
                  </div>
                  <div className="card-body">
                    <div className="card-title">
                      <h5>{product.title}</h5>
                      <small>Price: {product.price}$</small>
                    </div>
                    <p>{product.description}</p>
                    <p>{product.category}</p>
                    <p>{product.rating.rate}</p>
                    <p>{product.rating.count}</p>
                  </div>
                </div>
              </li>
            ))
          }
        </div>
      </ul>
    </>
  )
}