import Button from "./Button";

function Product({ id, image, title, price, description }) {
  return (
    <article>
      <img src={image} alt={title} />
      <div>
        <div>
          <h3>{title}</h3>
          <p>${price}</p>
          <p>{description}</p>
          <p>
            <Button>Add to Cart</Button>
          </p>
        </div>
      </div>
    </article>
  );
}

export default Product;
