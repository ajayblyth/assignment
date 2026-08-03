import { memo } from "react";

const Child = memo(({ style, onClick }) => {
  console.log("Child Rendered");

  return (
    <div>
      <h2 style={style}>React.memo Fixed</h2>

      <button onClick={onClick}>Click Me</button>
    </div>
  );
});

// if we remove React.memo that will cause the child to render , whenever the parent renders.

export default Child;