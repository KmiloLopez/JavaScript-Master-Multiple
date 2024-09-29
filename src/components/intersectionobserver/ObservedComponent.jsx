// ObservedComponent.js
import { useRef, useEffect, useState } from "react";
import "./ObservedComponentStyled.css"; // Importing the CSS file

const ObservedComponent = () => {
  const parentRef = useRef(null); // Reference to the parent element
  const [visibleBoxes, setVisibleBoxes] = useState(new Set()); // Set to track visible boxes

  useEffect(() => {
    // Create a single Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Check if the element is intersecting
          if (entry.isIntersecting) {
            setVisibleBoxes((prev) => {
              const newSet = new Set(prev);
              console.log(entry.target);
              newSet.add(entry.target); // Add the visible element to the set
              return newSet;
            });
            observer.unobserve(entry.target); // Unobserve the element once it's visible
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1, // Trigger when 50% of the box is visible
      }
    );

    // Event Delegation: Attach the observer to child boxes when they are added to the parent container
    if (parentRef.current) {
      const boxes = parentRef.current.querySelectorAll(".box");
      boxes.forEach((box) => observer.observe(box)); // Observe each box individually
    }

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="container">
      <h1>Scroll down to see the observed boxes</h1>
      <div ref={parentRef} className="parent">
        {[...Array(10).keys()].map((i) => (
          <div
            key={i}
            className={`box ${
              Array.from(visibleBoxes).includes(
                document.getElementById(`box-${i}`)
              )
                ? "visible"
                : ""
            }`} // Add class when visible
            id={`box-${i}`}
          >
            {Array.from(visibleBoxes).includes(
              document.getElementById(`box-${i}`)
            )
              ? `Box ${i + 1} is now visible!`
              : `Waiting to be visible...`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ObservedComponent;
