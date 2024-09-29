import { useState } from "react";
import "./EventDelegationStyled.css";

const EventDelegation = () => {
  const [boxestoDisplay, setBoxestoDisplay] = useState(3);
  const createBox = () => {
    console.log("CreateBox button clicked");
    setBoxestoDisplay((prev) => prev + 1);
  };
  const DisplayBoxes = () => {
    const array = [];
    for (let i = 0; i < boxestoDisplay; i++) {
      console.log("creating box");
      array.push(
        <li className="box" key={i}>
          {}
        </li>
      );
    }
    console.log(array);
    return array;
  };
  const handleClick = (e) => {
    console.log(e.target);
    if (e.target.matches(".box")) {
      //e.target.classList.toggle("clicked");
      e.target.className = e.target.className === "box" ? "box clicked" : "box";
      e.target.classList.textContent = "here";
      console.log("e.target.className", e.target.className);
      console.log("e.target.classList", e.target.classList);
    }
  };
  return (
    <>
      <div>
        <button onClick={createBox}>Create Box</button>
        <ul className="grid_parent" onClick={handleClick}>
          <DisplayBoxes />
        </ul>
      </div>
    </>
  );
};

export default EventDelegation;
