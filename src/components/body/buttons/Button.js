import React from "react";

const Button = ({ name }) => {
  return (
    <div className="bg-red-100 p-2 w-19 rounded-lg font-bold mt-1 shadow-sm flex items-center">
    {name}
    </div>
  );
};

export default Button;
