import React from "react";
import "./IngMaking.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
export const IngMaking = () => {
  return (
    <div className="IngMaking">
      <div>
        <Link to="/home"><BsFillArrowLeftCircleFill /></Link>
        <h1>Biryani</h1>
      </div>
      <div>
        <h3>Ingredients</h3>
        <p>Serving People : 4-6</p>
      </div>
      <img
        src="https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01-750x750.jpg"
        alt=""
      />
      <ul>
        <div>
          <li>Rice</li>
          <li>Chicken</li>
          <li>Masala</li>
          <li>Garlic Paste</li>
          <li>Tomatoes</li>
          <li>Onion</li>
        </div>
        <div className="quantity">
          <li>1 KG</li>
          <li>1.5 KG</li>
          <li>1 PACKET</li>
          <li>2 TS</li>
          <li>1/2 KG</li>
          <li>1/2 KG</li>
        </div>
      </ul>
      <AiFillPlusCircle className="circle" />
    </div>
  );
};
