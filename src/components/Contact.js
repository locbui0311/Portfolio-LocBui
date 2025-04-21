import React from "react";
import { useState } from "react";

const Contact = () => {
  const [counter, setCouter] = useState(1);

  const handleIncrease = () => {
    setCouter(counter + 1);
  };

  const handleReset = () => {
    setCouter(0);
  };
  return (
    <div className="section" id="contact">
      Contact
      <div className=" flex-col bg-slate-600 p-4 rounded-lg shadow-md mt-4">
        <button
          className="bg-red-400 p-4 rounded-lg shadow-md mt-4"
          onClick={handleIncrease}
        >
          Increase
        </button>
        <button
          className=" bg-red-400  p-4 rounded-lg shadow-md mt-4"
          onClick={handleReset}
        >
          Reset
        </button>
        <h2 className=" text-center pt-10">{counter}</h2>
      </div>
    </div>
  );
};

export default Contact;
