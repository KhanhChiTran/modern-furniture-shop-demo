import React from "react";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
import slugify from "slugify";
import Product from "../../assets/data/products";
import Layout from "../../components/Layout/Layout";
import Rating from "../../components/Rating/Rating";
import "./store.scss";

export default function Store() {
  return (
    <Layout>
      <div className="shop-header">
        <Link to="/">
          <TiArrowBack /> Home / Home Decoration
        </Link>
      </div>
      <div className="product-list">
        {Product.map((item, index) => {
          const { id, name, img, star, price } = item;

          return (
            <Link
              key={index}
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
    </Layout>
  );
}
