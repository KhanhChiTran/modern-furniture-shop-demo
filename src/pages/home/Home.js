import React, { useEffect, useState } from "react";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import Slider from "react-slick";
import Users from "../../assets/data/data";
// import BambooPot from "../../assets/images/ba";
import BambooPot from "../../assets/images/bamboo_pot.jpeg";
import Basket from "../../assets/images/basket1.jpeg";
import Table1 from "../../assets/images/table1.jpeg";
import Layout from "../../components/Layout";
import "./home.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  // speed: 2000,
  autoplaySpeed: 3000,
  cssEase: "linear",
  nextArrow: <SampleNextArrow />,
  prevArrow: <SampleNextArrow />,
};
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#666" }}
      onClick={onClick}
    />
  );
}

export default function Home() {
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

        <Slider {...settings}>
          {Users.map((user, index) => {
            const { id, image, job, name, text } = user;
            return (
              <div className="carousel-item" key={index}>
                <div className="feedback">
                  <p>{text}</p>
                  <h2>{name.toUpperCase()}</h2>
                  <h4>{job}</h4>
                </div>
                <div
                  className="picture"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              </div>
            );
          })}
        </Slider>
      </div>
    </Layout>
  );
}
