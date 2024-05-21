import React from "react";

export default function Product({ result }) {
  return (
    <div className="flex justify-between items-center flex-wrap mt-7  ">
      {result}
    </div>
  );
}
