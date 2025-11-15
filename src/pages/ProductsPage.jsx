import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductsPage() {

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

  return (
    <>
      <ul>
        <div className="row row-cols-1 row-cols-md-3 py-4 row-gap-4">
          {
            products.map((product) => (
              <li className="list-unstyled" key={product.id}>

                <div className="card">
                  <div className="card-header d-flex p-0 align-items-center">
                    <div className="px-3 py-4">
                      <img src={product.image} alt="" className="card-img-top product-image" />
                    </div>
                    <div className="card-title p-3">
                      <h5>{product.title}</h5>
                      <small>Price: {product.price}$</small>
                    </div>
                  </div>
                  <div className="card-body">
                    <p>Category: {product.category}</p>
                    <label htmlFor="">Description</label>
                    <p>{product.description}</p>
                    <p>Rates: {product.rating.rate}</p>
                    <p>Remaining: {product.rating.count} piecies</p>
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