import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
} from 'react-router-dom';

function ProductItemDetails() {
  const [prodoctDetails, setProductDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  let productDetailsApi = `https://fakestoreapi.com/products/${id}`;
  useEffect(() => {
    (async () => {
      try {
        const productDetailsApiRequest = await fetch(productDetailsApi);
        const productDetailsData = await productDetailsApiRequest.json();
        setTimeout(() => {
          setProductDetails(productDetailsData);
          setIsLoading(false);
        }, 3000);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className="productDetailsContainer">
      {isLoading ? (
        <div>
          <img
            className="loadingImg"
            src="/isloading.gif"
            alt="Image not found!"
          />
        </div>
      ) : (
        <div>
          <img src={prodoctDetails.image} />
          <div className="productDetails">
            <p>{prodoctDetails.id}</p>
            <p>{prodoctDetails.title}</p>
            <p>{prodoctDetails.price}</p>
            <p>{prodoctDetails.description}</p>
            <p>{prodoctDetails.category}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductItemDetails;
