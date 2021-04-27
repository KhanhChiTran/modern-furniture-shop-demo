import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";

import Rating from "../../components/rating/Rating";
import slugify from "slugify";

import "./store.scss";
import { TiArrowBack } from "react-icons/ti";

import { Link } from "react-router-dom";

import Product from "../../assets/data/products";

export default function Store() {
  return (
    <Layout>
      <div className="shop-header">
        <Link to="/">
          <TiArrowBack /> Home / Home Decoration
        </Link>
      </div>
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
    </Layout>
  );
}
