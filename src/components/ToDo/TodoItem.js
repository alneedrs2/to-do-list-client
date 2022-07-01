import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ToDoItem = (props) => {
  const [task, setTask] = useState([]);
  useEffect(() => {
    fetch(" https://tragically-inukshuk-07162.herokuapp.com/get-todo")
      .then((res) => res.json())
      .then((data) => setTask(data));
  }, []);
  const handleCheck = () => {
    toast.success(
      "Awesome! You have done this task! You will complete another Task"
    );
  };

  return (
    <div className="h-[500px]">
      <h1 className="text-center text-2xl font-bold py-5 text-accent">
        {" "}
        To Do List{" "}
      </h1>
      <div class="overflow-x-auto">
        <table class="table lg:w-full">
          <thead>
            <tr>
              <th className="font-bold text-xl">Complete </th>
              <th className="font-bold text-xl">Name</th>
              <th className="font-bold text-xl">Date</th>
              <th className="font-bold text-xl">Time</th>
            </tr>
          </thead>
          {task.map((t) => (
            <tbody>
              <tr>
                <th>
                  <i onClick={handleCheck} class="ri-checkbox-fill"></i>
                </th>
                <td className="text-xl">
                  {t.task}{" "}
                  <Link to={`/update/${(t.task, t._id)}`}>
                    <i class="ri-edit-2-fill"></i>
                  </Link>
                </td>
                <td className="text-xl">{t.date}</td>
                <td className="text-xl">{t.time}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ToDoItem;
