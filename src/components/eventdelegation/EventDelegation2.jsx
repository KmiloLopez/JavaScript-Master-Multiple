import { useState, useEffect, useRef } from "react";
import "./EventDelegation2Styled.css"; // Import CSS for styling

const EventDelegation2 = () => {
  // State to keep track of the number of boxes
  const [boxes, setBoxes] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  ]); // Initial state with 3 boxes
  const observerRef = useRef(null); // Ref to hold the IntersectionObserver
  const observerRefLast = useRef(null);
  // Function to add a new box
  const addBox = () => {
    setBoxes((prevBoxes) => [...prevBoxes, prevBoxes.length + 1]);
  };

  // Function to handle click on the grid container (event delegation)
  const handleFatherBoxClick = (e) => {
    if (e.target.matches(".box")) {
      e.target.classList.toggle("clicked");
      console.log("box clicked", e.target.className);
    }
  };

  // IntersectionObserver callback function
  const cargarImagen = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  };

  // Set up the observer in useEffect
  useEffect(() => {
    observerRef.current = new IntersectionObserver(cargarImagen, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });

    // Observe each box when the component mounts or boxes change
    const currentObserver = observerRef.current;
    document.querySelectorAll(".box").forEach((box) => {
      currentObserver.observe(box);
    });

    // Observe last
    observerRefLast.current = new IntersectionObserver(
      (entries) => {
        console.log("I see it here");
        console.log(entries[0]);
        const lastCard = entries[0];
        if (!lastCard.isIntersecting) return;

        setBoxes((prevBoxes) => [...prevBoxes, prevBoxes.length + 1]);
        lastObserver.unobserve(lastCard.target);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );
    const lastObserver = observerRefLast.current;
    lastObserver.observe(document.querySelector(".box:last-child"));

    // Cleanup function to disconnect observer when component unmounts
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [boxes]); // Re-run the effect whenever boxes change

  return (
    <div className="container">
      <h1>Dynamic Box Grid</h1>
      <button className="add-box-button" onClick={addBox}>
        Add Box
      </button>
      <div className="box-grid" onClick={handleFatherBoxClick}>
        {boxes.map((box, index) => (
          <div key={index} className="box">
            Box {box}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventDelegation2;
