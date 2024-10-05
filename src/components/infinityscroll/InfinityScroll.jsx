import { useEffect, useState } from "react";
import "./InfinityScrollStyled.css";
const Displayboxes2 = ({ displaybox }) => {
  return displaybox.map((element, i) => {
    return (
      <div key={i} className="box">
        {i + 1}
      </div>
    );
  });
};
const InfinityScroll = () => {
  const [displaybox, setDisplaybox] = useState(new Array(12).fill(0));

  const handleClick = (e) => {
    if (e.target.matches(".box")) {
      console.log("this is a box", e.target);
      e.target.classList.toggle("clicked");
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        //setDisplaybox((prev) => prev.concat(new Array(12).fill(0)));
        //setDisplaybox(displaybox.concat(new Array(12).fill(0)));
        const newnew = [...displaybox, ...new Array(12).fill(0)];
        setDisplaybox(newnew);
      }
    });
    const lastbox = document.querySelector(".box:last-child");
    observer.observe(lastbox);
    return () => {
      observer.disconnect();
    };
  }, [displaybox]);
  return (
    <div className="boxes-container" onClick={handleClick}>
      <Displayboxes2 displaybox={displaybox} />
      {/* {displaybox.map((element, i) => {
        return (
          <div key={i} className="box">
            {i + 1}
          </div>
        );
      })} */}
    </div>
  );
};
export default InfinityScroll;

// import { useEffect, useState } from "react";
// import "./InfinityScrollStyled.css";

// const InfinityScroll = () => {
//   const [boxes, setBoxes] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       console.log("this is entrie raw", entries);
//       if (entries[0].isIntersecting) {
//         console.log("isIntersecting = true");

//         const newboxes = [...boxes];
//         for (let i = 1; i <= 8; i++) {
//           newboxes.push(i + boxes.length);
//         }
//         setBoxes(newboxes);
//         //TODO: any otther way to add one box only directly in the setBoxes function without new boxes
//         setBoxes(newboxes);
//       }
//     });

//     const boxes3 = document.getElementsByClassName("box");

//     observer.observe(boxes3[boxes3.length - 1]);

//     return () => {
//       console.log("observer disconnected");
//       observer.disconnect();
//     };
//   }, [boxes]);
//   return (
//     <div className="boxes-container">
//       {boxes.map((box, i) => {
//         return (
//           <div key={i} className="box">
//             {box}
//           </div>
//         );
//         //createboxes(box, i);
//       })}
//     </div>
//   );
// };

// export default InfinityScroll;
