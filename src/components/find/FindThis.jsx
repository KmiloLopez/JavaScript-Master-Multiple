import { useState } from "react";
import contactos from "../../assets/contacts";

const FindThis = () => {
  const [phoneNum, setPhoneNum] = useState("");
  const [indexFound, setIndexFound] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const index = contactos.findIndex(
      (contact) => contact.telefono === phoneNum
    );
    setIndexFound(index);
  };
  return (
    <>
      <h3>Find index in a list by phone number</h3>
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Phone number
          <input
            value={phoneNum}
            onChange={(e) => {
              setPhoneNum(e.target.value);
            }}
          ></input>
        </label>
        <button>FindIndex</button>
      </form>
      {indexFound && <p>The index is: {indexFound}</p>}
    </>
  );
};

export default FindThis;
