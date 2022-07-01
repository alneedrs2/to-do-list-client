import { useEffect, useState } from "react";

const useItems = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch(" https://tragically-inukshuk-07162.herokuapp.com/get-todo/")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  return [item, setItem];
};

export default useItems;
