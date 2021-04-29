import React, { useState, useEffect } from "react";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";

import Layout from "../../components/layout/Layout";

// import BambooPot from "../../assets/images/ba";
import BambooPot from "../../assets/images/bamboo_pot.jpeg";
import Basket from "../../assets/images/basket1.jpeg";
import Table1 from "../../assets/images/table1.jpeg";

import Users from "../../assets/data/data";

import "./home.scss";

export default function Home() {
  const [index, setIndex] = useState(0);
  const [slide, setSlide] = useState("");
  const { id, image, job, name, text } = Users[index];
  const checkIndex = (num) => {
    if (num > Users.length - 1) {
      return 0;
    }
    if (num < 0) {
      return Users.length - 1;
    }
    return num;
  };
  const toPrev = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  const toNext = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };
  useEffect(() => {
    setSlide("slide");
    setTimeout(() => {
      setSlide("");
    }, 700);
  }, [index]);

  return (
    <Layout>
      <div className="home-wrap">
        <div className="home-images">
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
          <button onClick={toPrev} className="arrow-left">
            {" "}
            <CgArrowLongLeft className="arrow-left-icon" />
          </button>
          <button onClick={toNext} className="arrow-right">
            {" "}
            <CgArrowLongRight className="arrow-right-icon" />
          </button>
          <img className={`${slide} user-img`} src={image} alt="" />
          <p className={slide}>{text}</p>
          <h2 className={slide}>{name.toUpperCase()}</h2>
          <h4 className={slide}>{job}</h4>
        </div>
      </div>
    </Layout>
  );
}
