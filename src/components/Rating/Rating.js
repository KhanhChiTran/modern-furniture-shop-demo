import React from "react";
import { AiFillStar } from "react-icons/ai";
export default function Rating({ star = 5 }) {
  let ratingArray = [...new Array(star)];

  return (
    <div>
      {ratingArray.map((rate, index) => (
        <span key={index}> {<AiFillStar className="star" />} </span>
      ))}
    </div>
  );
}
