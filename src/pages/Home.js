import React, { useState } from "react";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";

import Layout from "../components/Layout";

import BambooPot from "../assets/images/bamboo_pot.jpeg";
import Basket from "../assets/images/basket1.jpeg";
import Table1 from "../assets/images/table1.jpeg";

import Users from "../assets/data/data";

import "./home.scss";

export default function Home() {
  const [index, setIndex] = useState(0);
  const { id, image, job, name, text } = Users[index];
  return (
    <Layout>
      <div className="home-wrap">
        <div className="home-images">
          {/* <img className="pot" src={Pot1} alt="Pot" /> */}
          <img className="table" src={Table1} alt="Table" />
          <img className="pot" src={BambooPot} alt="Pot" />
          <img className="pot2" src={Basket} alt="Vase" />
        </div>
        <div className="home-intro">
          <h3>Home Decoration</h3>
          <article>
            Want to reinvent the look and feel of your home? Whatever style
            you’re going for, our edit is here to help you fall head over heels
            with staying at home.
          </article>
        </div>
        <div className="reviews">
          <button className="arrow-left">
            {" "}
            <CgArrowLongLeft />
          </button>
          <button className="arrow-right">
            {" "}
            <CgArrowLongRight />
          </button>
          <img className="user-img" src={image} alt="" />
          <p>{text}</p>
          <h2>{name.toUpperCase()}</h2>
          <h4>{job}</h4>
        </div>
      </div>
    </Layout>
  );
}
