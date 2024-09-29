import { useState } from "react";

const Matrix = () => {
  const [boxes, setBoxes] = useState(
    Array.from(Array(100), (_, index) => ({
      id: index,
      color: "white",
    }))
  );
  console.log(boxes);

  const handleBoxClick = (id) => {
    setBoxes((prevBoxes) =>
      prevBoxes.map((box) =>
        box.id === id
          ? { ...box, color: box.color === "white" ? "blue" : "white" }
          : box
      )
    );
  };

  const handleDeleteClick = (id) => {
    setBoxes((prevBoxes) => prevBoxes.filter((box) => box.id !== id));
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
        gap: "10px",
        width: "100vw",
        height: "100vh",
      }}
    >
      {boxes.map((box) => (
        <div
          key={box.id}
          style={{
            backgroundColor: box.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100px",
            border: "1px solid black",
            position: "relative",
          }}
          onClick={() => handleBoxClick(box.id)}
        >
          <button
            style={{
              position: "absolute",
              top: "5px",
              right: "5px",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.stopPropagation(); // Prevents the box click event
              handleDeleteClick(box.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Matrix;
