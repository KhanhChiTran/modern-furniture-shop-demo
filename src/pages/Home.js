import React from "react";
import Layout from "../components/Layout";
import "./home.scss";
import BambooPot from "../assets/images/bamboo_pot.jpeg";
import Pot2 from "../assets/images/pot2.jpeg";
import Table1 from "../assets/images/table1.jpeg";
export default function Home() {
  return (
    <Layout>
      <div className="home-wrap">
        <div className="home-images">
          {/* <img className="pot" src={Pot1} alt="Pot" /> */}
          <img className="table" src={Table1} alt="Table" />
          <img className="pot" src={BambooPot} alt="Pot" />
          <img className="pot2" src={Pot2} alt="Vase" />
        </div>
        <div className="home-intro">
          <h1>Home Decoration</h1>
          <p>
            Want to reinvent the look and feel of your home? Our stylish range
            of home decorations adds those finishing touches to any room – think
            everything from fragrant scented candles, to elegant glassware and
            chic storage options. Stay on trend with rattan baskets, or
            transform your space into an urban jungle with the help of our
            indoor and outdoor plant pots. Whatever style you’re going for, our
            edit is here to help you fall head over heels with staying at home.
          </p>
        </div>
      </div>
    </Layout>
  );
}
