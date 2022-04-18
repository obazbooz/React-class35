function ProductsItem({ product: { title, description, image } }) {
  return (
    <li>
      <img className="productImg" src={image} alt={title} />
      <p className="productDesc">{description}</p>
    </li>
  );
}

export default ProductsItem;
