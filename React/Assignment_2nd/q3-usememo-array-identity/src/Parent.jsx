import { useMemo, useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);

  const fruits = useMemo(() => {
    return ["Apple", "Mango", "Orange"];
  }, []);

  // Without useMemo a new array is created every render.
  // React.memo compares references, so the child re-renders
  // even though the contents are the same.

  return (
    <div style={{ padding: 20 }}>
      <h2>Array Identity</h2>

      <button onClick={() => setCount(count + 1)}>
        Counter : {count}
      </button>

      <Child fruits={fruits} />
    </div>
  );
}

export default Parent;