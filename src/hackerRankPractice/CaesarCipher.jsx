import React from "react";

const original = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const Testing = () => {
  function caesarCipher(s, k) {
    let arrayS = s.split("");
    let upperCaseIndexes = [];
    let newK = k;
    if (k > 26) {
      newK = k - 26;
      if (newK > 26) {
        newK = newK - 26;
        if (newK > 26) {
          newK = newK - 26;
        }
      }
    }

    const cipherArrayS = arrayS.map((letter, indexi) => {
      if (letter === letter.toUpperCase() && letter !== letter.toLowerCase()) {
        upperCaseIndexes.push(indexi);
      }
      const index = original.findIndex(
        (element) => element == letter.toLowerCase()
      );
      if (index !== -1) {
        let newIndex = 0;
        if (original.length - 1 - newK >= index) {
          console.log("lower");
          newIndex = index + newK;
        } else {
          console.log("longer");
          console.log("index-original.length", index - original.length);
          newIndex = index - original.length + newK;
        }
        return original[newIndex];
      }
      return letter;
    });

    upperCaseIndexes.map(
      (indexref) =>
        (cipherArrayS[indexref] = cipherArrayS[indexref].toUpperCase())
    );

    return cipherArrayS.join("");
  }

  console.log(caesarCipher("D3q4", 0));

  return (
    <>
      <h3></h3>
    </>
  );
};

export default Testing;
