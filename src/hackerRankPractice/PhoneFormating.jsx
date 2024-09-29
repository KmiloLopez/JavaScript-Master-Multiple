import React, { useState } from "react";
//we want to modify the input as we enter the digits

const PhoneFormating = () => {
  const [numberEntered, setNumberEntered] = useState("");

  const handleOnChange = (e) => {
    if (e.target.value.length > 3) {
      if (e.target.value.length == 4) {
        console.log("longer that 3");
        const temp = e.target.value;
        const lastNum = temp.split("").splice(3, 1);
        setNumberEntered((prev) => `(${prev})${lastNum}`);
        return;
      }
      if (numberEntered.length == 8) {
        console.log("7 digits");
        const temp = e.target.value;
        const lastNum = temp.split("").splice(6, 1);
        setNumberEntered((prev) => `${prev}-${lastNum}`);
        return;
      }
      if (numberEntered.length == 13) {
        console.log("10 digits");
        return;
      }
    }
    console.log("e.target.value", e.target.value);
    console.log("e.target", e.target);
    setNumberEntered(e.target.value);
  };
  return (
    <div>
      <h3>Phone Formating</h3>
      <input
        type="text"
        value={numberEntered}
        onChange={handleOnChange}
      ></input>
    </div>
  );
};

export default PhoneFormating;
