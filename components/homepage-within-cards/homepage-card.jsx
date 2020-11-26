import React from "react";
import Thar from "../../images/m2all_logo_red.png"
import "./Homepage-card.module.css"

const HomepageCard = () => {
  return (
    <div class="card">
      <img src={Thar} alt="Avatar" style="width:100%" />
      <div class="container">
        <h4>
          <b>John Doe</b>
        </h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  );
};

export default HomepageCard;
