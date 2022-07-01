import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Update = (data) => {
  const { register, reset } = useForm();
  const { id } = useParams();
  const [items, setItems] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/get-todo/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [data]);

  const handelAdd = (event) => {
    event.preventDefault();
    const task = event.target.task.value;
    const updateItems = { task };
    console.log(task);

    const url = `http://localhost:5000/get-todo/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateItems),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          reset();
        }
      });
  };
  const handleCheak = () => {
    toast.success(
      "Successfully Updated."
    );
  };
  return (
    <div className="container">
      <h2 className="text-2xl font-bold text-accent">
        Updating Task: {items.task}
      </h2>
      <form onSubmit={handelAdd}>
        <input
          type="text"
          placeholder="Update Here"
          name="task"
          {...register("task", {
            required: {
              value: true,
              message: "task name is Required",
            },
          })}
        />
        <input
          className="btn w-96 btn-primary text-white"
          type="submit"
          onChange={handleCheak}
          value="Update"
        />
      </form>
    </div>
  );
};

export default Update;
