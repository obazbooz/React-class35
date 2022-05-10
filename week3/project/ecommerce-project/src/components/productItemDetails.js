import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from './navigation';
import useFetchApi from '../hooks/useFetchApi';
import { LoadingContext } from '../contexts/loadingContext';

function ProductItemDetails() {
  const {isLoading, isFail} =
    useContext(LoadingContext);
  const { id } = useParams();
  const productDetailsApi = `https://fakestoreapi.com/products/${id}`;
  const productDetails = useFetchApi(productDetailsApi);

  return (
    <div className="productDetailsContainer">
      <Navigation />
      {isLoading && !isFail ? (
        <img
          className="loadingImg"
          src="/isloading.gif"
          alt="Loading icon not found!"
        />
      ) : (
        <div>
          <img
            className="detailsImg"
            src={productDetails.image}
            alt={'Product_Img not found!'}
          />
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
          </div>
        </div>
      )}
      <div>
        {isFail && (
          <div> Unable to get data from server please try again later :''</div>
        )}
      </div>
    </div>
  );
}

export default ProductItemDetails;
