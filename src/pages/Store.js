import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

import "./store.scss";
import { AiOutlineStar } from "react-icons/ai";
import { TiArrowBack } from "react-icons/ti";

import { Link } from "react-router-dom";

import Product from "../assets/data/products";

export default function Store() {
  // const [star, setStar] = useState([]);
  // const countStar = (star) => {
  //   let arr = [];
  //   while (arr.length < star) {
  //     arr = arr.push(<TiArrowBack />);
  //   }
  //   console.log(arr);
  //   return setStar([...arr]);
  // };

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
          let ratingArray = [...new Array(star)];
          // let ratingArray = new Array(star).fill('');
          return (
            <div className="product-item" key={id}>
              <img className="product-img" src={img} alt="" />
              <div className="product-text">
                <h3>{name}</h3>
                {/* <span>{vote}</span> */}
                {ratingArray.map((rate, index) => (
                  <span index={index}> {<AiOutlineStar />} </span>
                ))}

                <p>€{price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
