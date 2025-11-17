import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function ProductPage(){

  const { id } = useParams();
  const [ product, setProduct ] = useState([]);

  function fetchData(){
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(response => {
      console.log(response.data)
      setProduct(response.data)
    })
  }

  useEffect(fetchData, []);

  return(
    <>
      <div className="container">
        <div className="card product-card d-flex flex-row">
          <img src={product.image} className="product-image" />
          <div className="card-body">
            <p><span className="bold">Category:</span> {product.category}</p>
            <label htmlFor="" className="bold">Description:</label>
            <p>{product.description}</p>
            <p><span className="bold">Rates:</span> {product.rating.rate}</p>
            <p><span className="bold">Remaining:</span> {product.rating.count} piecies</p>
          </div>
        </div>
      </div>
    </>
  )
}