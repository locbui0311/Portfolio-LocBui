import React from "react";
import { useState } from "react";

const order = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const Contact = () => {
  const [counter, setCouter] = useState(() => {
    const total = order.reduce((total, cur) => total + cur);
    console.log(total);
    return total;
  });

  const [info, setInfo] = useState({
    name: "Bui Ba Loc",
    age: 20,
    address: "HCM",
  });

  const handleIncrease = () => {
    setCouter(counter + 1);
  };

  const handleReset = () => {
    setCouter(0);
  };
  //// Update state with function
  const handleUpdate = () => {
    setInfo((prev) => ({
      ...prev, ////callback function to get the previous state
      ...info, //// spread operator to copy the existing state
      bio: "Thich la code",
    }));
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
        <button
          className=" bg-red-400  p-4 rounded-lg shadow-md mt-4"
          onClick={handleUpdate}
        >
          Update
        </button>
        <h1 className=" text-center pt-10">{JSON.stringify(info)}</h1>
        <h2 className=" text-center pt-10">{counter}</h2>
      </div>
    </div>
  );
};

export default Contact;
