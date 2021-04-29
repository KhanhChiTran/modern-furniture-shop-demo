import React from "react";
import Product from "../../assets/data/products";

export default function Carousel({ name = "RELATED PRODUCTS" }) {
  return (
    <div className="product-list">
      {Product.map((item) => {
        const { id, name, img, star, price } = item;

        return (
          <Link
            to={{
              pathname: `/productdetail/${slugify(name, {
                lower: true,
              })}`,
              state: item,
            }}
          >
            <div className="product-item" key={id}>
              <img className="product-img" src={img} alt="" />
              <div className="product-text">
                <h3>{name}</h3>
                <Rating star={star} />
                <p>€{price}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
