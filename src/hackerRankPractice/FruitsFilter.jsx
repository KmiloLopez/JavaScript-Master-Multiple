import React, { useEffect, useState } from "react";

const fruits = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
  "Kiwi",
  "Lemon",
  "Mango",
  "Nectarine",
  "Orange",
  "Papaya",
  "Quince",
  "Raspberry",
  "Strawberry",
  "Tangerine",
  "Ugli fruit",
  "Watermelon",
];
const useDebounce = (text, delay) => {
  const [debounce, setDebounce] = useState(text);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(text);
    }, delay);
    return () => clearTimeout(timer);
  }, [text, delay]);
  return debounce;
};

const FruitsFilter = () => {
  const [filteredFruits, setFilteredFruits] = useState([...fruits]);
  const [newFruits, setNewFruits] = useState([]);
  const [enteredText, setEnteredText] = useState("");

  //console.log(filteredFruits);

  const handleOnChange = (e) => {
    setEnteredText(e.target.value);
  };

  const debouncedText = useDebounce(enteredText, 2000);

  useEffect(() => {
    const afterfilter = filteredFruits.filter((fruit) =>
      fruit.toLocaleLowerCase().includes(debouncedText.toLocaleLowerCase())
    );
    setNewFruits(afterfilter);
  }, [debouncedText, filteredFruits]);
  return (
    <div>
      <input value={enteredText} onChange={handleOnChange}></input>
      {enteredText
        ? newFruits.map((fruit, index) => {
            return <p key={index}>{fruit}</p>;
          })
        : fruits.map((fruit, index) => {
            return <p key={index}>{fruit}</p>;
          })}
    </div>
  );
};

export default FruitsFilter;
