import React, { useState } from "react";
///// React hooks: Two-way binding
const gifts = ["Thẻ cào 20k", "Thẻ cào 50k", "Thẻ cào 100k"];

const coursers = [
  {
    id: 1,
    name: "ReactJS",
    price: 100,
  },
  {
    id: 2,
    name: "NodeJS",
    price: 200,
  },
  {
    id: 3,
    name: "JavaScript",
    price: 300,
  },
];
const Gifts = () => {
  const [gift, setGift] = useState();
  const [checked, setChecked] = useState([]);
  const [job, setJob] = useState("");
  
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("job"));
    console.log(storageJobs);
    return storageJobs;
  });
 
  console.log(job);
  const handleSubmitTodoList = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];
      //Save to local storage
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("job", jsonJobs);
      return newJobs;
    });
    setJob("");
  };

  const handleChecked = (id) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        return checked.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  const handleSubmit = () => {
    console.log({ id: checked });
  };

  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * gifts.length);
    setGift(gifts[randomIndex]);
  };
  return (
    <div className="section flex flex-col items-start " id="gifts">
      {/* Todolist*/}
      <div className="bg-slate-700 p-8 mb-8 rounded-lg">
        <h1>Todolist</h1>
        <input
          className="text-cyan-800"
          type="text"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <br></br>
        <ul>
          {jobs.map((job, index) => (
            <li key={index}> {job} </li>
          ))}
        </ul>
        <button
          className=" bg-red-400  p-4 rounded-lg shadow-md mt-4"
          onClick={handleSubmitTodoList}
        >
          Submit
        </button>
      </div>
      {/* Checkbox theo [] dung filter*/}
      <div className="bg-slate-700 p-8 mb-8 rounded-lg">
        <h1>Checkbox theo [] dung filter</h1>
        {coursers.map((course) => (
          <div
            key={course.id}
            className=" flex-col p-4 bg-slate-500 rounded-lg shadow-md mt-4"
            id="checkbox"
          >
            <input
              type="checkbox"
              checked={checked.includes(course.id)}
              onChange={() => handleChecked(course.id)}
            />
            {course.name}
          </div>
        ))}
        <button
          className=" bg-red-400  p-4 rounded-lg shadow-md mt-4"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      {/* Check radio theo id  dung map*/}
      <div className="bg-slate-700 p-8 mb-8 rounded-lg">
        <h1>Check radio theo id dung map</h1>
        {coursers.map((course) => (
          <div
            key={course.id}
            className=" flex-col p-4 bg-slate-500 rounded-lg shadow-md mt-4"
            id="checkbox"
          >
            <input
              type="radio"
              checked={checked === course.id}
              onChange={() => setChecked(course.id)}
            />
            {course.name}
          </div>
        ))}
        <button
          className=" bg-red-400  p-4 rounded-lg shadow-md mt-4"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      {/* Gifts code */}
      <div
        className=" flex-col bg-slate-600 p-4 rounded-lg shadow-md mt-4"
        id="gifts"
      >
        <button
          className=" bg-red-400  p-4 rounded-lg shadow-md mt-4"
          onClick={handleRandom}
        >
          Random
        </button>
        <h1 className=" text-center pt-10">{gift || "Chưa có phần thưởng"}</h1>
      </div>
    </div>
  );
};

export default Gifts;
