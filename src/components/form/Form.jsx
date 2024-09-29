import { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submited");
    console.log("content : " + age, lastName, firstName);
    setAge("");
    setFirstName("");
    setLastName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name
        <input
          type="text"
          placeholder="first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
      </label>

      <label>
        Last Name
        <input
          type="text"
          placeholder="last name"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        ></input>
      </label>
      <label>
        Age
        <input
          type="text"
          placeholder="age"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        ></input>
      </label>

      <button>Send</button>
    </form>
  );
};

export default Form;
