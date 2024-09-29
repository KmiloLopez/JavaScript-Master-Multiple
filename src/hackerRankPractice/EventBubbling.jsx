const EventBubbling = () => {
  const handleParentClick = (e) => {
    console.log("Parent Div clicked!");
  };

  const handleChildClick = (e) => {
    console.log("Child Button clicked!");
    // Uncomment the next line to stop event bubbling to the parent
    // e.stopPropagation();
  };

  return (
    <div
      onClick={handleParentClick}
      style={{ border: "2px solid blue", padding: "20px" }}
    >
      <h1>Parent Div</h1>
      <button onClick={handleChildClick}>Click me</button>
    </div>
  );
};

export default EventBubbling;
