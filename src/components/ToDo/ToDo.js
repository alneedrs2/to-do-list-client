import React from "react";
import TodoItem from "./TodoItem";
import { toast } from "react-toastify";

const ToDo = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const task = e.target.name.value;
    const date = e.target.date.value;
    const time = e.target.time.value;
    console.log(task, date, time);

    toast.success("Your ToDo added successfully. Refresh the page to see your todo.");
    const taskDetails = { task, date, time };

    fetch("http://localhost:5000/get-todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        e.target.reset();
      });
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("enter press here! ");
    }
  };

  return (
    <div className="my-20">
      <h2 className="bg-purple-400 text-white text-center max-w-2xl font-mono shadow-xl text-5xl font-medium m-auto mt-5 mb-5 p-5 border-gray-400 rounded-lg">
        My Todo List:
      </h2>

      <div className="grid">
        <form
          className="grid grid-cols-1 lg:grid-cols-4 gap-5 "
          onKeyPress={handleKeyPress}
          onSubmit={handleSubmit}
        >
          <input
            className="mr-2 w-auto text-center text-xl rounded-md"
            type="text"
            name="name"
            placeholder="Enter ToDo"
          />
          <input className="mr-2 w-auto " type="date" name="date" required />
          <input className="mr-2 w-auto " type="time" name="time" required />
          <input
            className="btn w-auto "
            type="submit"
            value="Add Task"
            required
          />
        </form>
      </div>
      <div className="list">
        <TodoItem />
      </div>
    </div>
  );
};

export default ToDo;
