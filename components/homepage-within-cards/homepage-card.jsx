import React from "react";
import Thar from "../../images/m2all_logo_red.png";
import "./Homepage-card.module.css";

const HomepageCard = () => {
  return (
    <div class="card">
      <img src={Thar} alt="Avatar" style="width:100%" />
      <div class="container">
        <h4>
          <b>Essential Accessories</b> <br />
          <b> Accessories every </b>
          <br />
          <b>Mahindra</b>
          <br />
        </h4>
        <p>40k+ products</p>
        <h6>Explore</h6>
      </div>
    </div>
  );
};

export default HomepageCard;
