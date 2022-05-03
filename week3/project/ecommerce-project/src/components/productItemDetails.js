import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

function ProductItemDetails() {
  const [productDetails, setProductDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFail, setIsFail] = useState(false);
  const { id } = useParams();
  const productDetailsApi = `https://fakestoreapi.com/products/${id}`;

  useEffect(() => {
    (async () => {
      try {
        const productDetailsApiRequest = await fetch(productDetailsApi);
        const productDetailsData = await productDetailsApiRequest.json();
        setTimeout(() => {
          setProductDetails(productDetailsData);
          setIsLoading(false);
          setIsFail(false);
        }, 2000);
      } catch (error) {
        console.log(error);
        setIsFail(true);
      }
    })();
  }, []);

  return (
    <div className="productDetailsContainer">
      <h1 className="mainTitle">MEDIA OCEAN</h1>
      {isLoading && !isFail ? (
        <img
          className="loadingImg"
          src="/isloading.gif"
          alt="Image not found!"
        />
      ) : (
        <div>
          <img className="detailsImg" src={productDetails.image} />
          <div className="productDetails">
            <p>
              <span>Product ID: </span>
              {productDetails.id}
            </p>
            <p>
              <span>Product Title: </span>
              {productDetails.title}
            </p>
            <p>
              <span>Product Category: </span>
              {productDetails.category}
            </p>
            <p>
              <span>Product Price: </span>
              {productDetails.price}
            </p>
            <p>
              <span>Product Description: </span>
              {productDetails.description}
            </p>
            <p>
              <span>Product Rating: </span>
              {productDetails.rating.rate}
            </p>
          </div>
        </div>
      )}
      {isFail ? (
        <div> Unable to get data from server please try again later</div>
      ) : (
        ''
      )}
    </div>
  );
}

export default ProductItemDetails;
