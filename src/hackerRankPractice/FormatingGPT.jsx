import React, { useState } from "react";

const PhoneNumberInput = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    let input = e.target.value.replace(/[^0-9]/g, ""); // Remove all non-numeric characters

    if (input.length > 10) {
      input = input.slice(0, 10); // Limit to 10 digits
    }

    if (input.length > 6) {
      input = `(${input.slice(0, 3)}) ${input.slice(3, 6)}-${input.slice(6)}`;
    } else if (input.length > 3) {
      input = `(${input.slice(0, 3)}) ${input.slice(3)}`;
    } else {
      input = input;
    }

    setValue(input);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Enter phone number"
      maxLength={14} // Max length is 14 to account for formatted characters
      minLength={2}
    />
  );
};

export default PhoneNumberInput;
