export function Events() {
  function handleClick(e) {
    console.log("Click event triggered");
    e.preventDefault();
  }

  function handleMouseEnter(e) {}

  function handleOnChange(e) {}

  function handleBubble(e) {}

  function handleCapture(e) {}

  function handleStopPropagation(e) {
    // stopPropagation;
  }

  return (
    <div className="card">
      <button onClick={handleClick}>Click me</button>

      <input type="text" onChange={handleOnChange} />

      {/* click handleBubble */}
      <div>
        <button onClick={handleStopPropagation}>
          Click event Stop Propagation
        </button>
      </div>

      {/* onClickCapture */}
      <div onClickCapture={handleCapture}>
        <button onClick={handleBubble}>Capture</button>
      </div>

      {/* handleMouseEnter */}
      <div>Mouse enter event</div>
    </div>
  );
}
