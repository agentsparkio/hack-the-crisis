import React from 'react';
import { Card, Elevation } from "@blueprintjs/core";
import Badge from "../../components/badge/badge";
import Article from "../../components/article/article";
import "./Rewards.css";

function Rewards() {
  return (
    <div className="Rewards">
      <Article
        title="15% off Wine at Marrickville Fish n Chip Takeout"
        description="Save 20% off all sustainable and organically grown food. Voucher Code: 666. "
        image="hand-hold-show-recyclable-plastic-600w-612750737.webp"
        />
      <Article
        title="Glebe Cruelty Free Shop 20% off"
        description="Save 20% off all sustainable and organically grown food. "
        image="trash-recycle-reduce-ecology-environment-600w-731239045.webp"
        />
      <Article
        title="Devil By Design 6.66% off"
        description="Save 20% off all sustainable and organically grown food. Voucher Code: 666. "
        image="plastic-bottle-garbage-recycling-concept-600w-698172910.webp"
        />
        
    </div>
  );
}

export default Rewards;
