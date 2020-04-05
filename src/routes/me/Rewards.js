import React from 'react';
import { Card, Elevation } from "@blueprintjs/core";
import Badge from "../../components/badge/badge";
import Article from "../../components/article/article";
import "./Rewards.css";

function Rewards() {
  return (
    <div className="Rewards">
      <Article
        points={600}
        title="15% off Wine at Marrickville Fish n Chip Takeout"
        description="Save 20% off all sustainable and organically grown food. "
        image="leisure-people-technology-concept-happy-couple-laptop-computer-takeaway-pizza-drinking-red-wine-home-happy-151690785.jpg"
        />
      <Article
        points={500}
        title="Glebe Cruelty Free Shop 20% off"
        description="Save 20% off all sustainable and organically grown food. "
        image="healthy-organic-food-apple-cider-vinegar-juice-glass-bottle-fresh-red-apples-healthy-organic-food-apple-cider-vinegar-153750037.jpg"
        />
      <Article
        points={200}
        title="Devil By Design discount sale! "
        description="Save 20% off all sustainable and organically grown food. Voucher Code: 666. "
        image="online-order-grocery-shopping-concept-food-delivery-ingredients-service-home-cooking-packages-box-icon-media-152464079.jpg"
        />
        
    </div>
  );
}

export default Rewards;
