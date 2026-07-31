import { memo } from "react";

const Child = memo(({ fruits }) => {
  console.log("Child Rendered");

  return (
    <div>
      <h3>Fruit List</h3>

      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
});

// Removing React.memo causes the child to render whenever
// the parent renders.

export default Child;