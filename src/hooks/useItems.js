import { useEffect, useState } from "react";

const useItems = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/get-todo/")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  return [item, setItem];
};

export default useItems;
