import React from "react";

const FormatPrice = ({ price }) => {
  return (
    <span>
      {Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2,
      }).format(price / 100)}
    </span>
  );
};

export default FormatPrice;

