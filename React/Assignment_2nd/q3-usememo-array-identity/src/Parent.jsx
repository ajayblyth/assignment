import { useMemo, useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);

// The array values stay the same, but a new array is created on every render.
// React.memo compares prop references, not the actual values.
// Since the reference changes each time, the child re-renders.


  // const fruits = ["Apple", "Banana", "Orange"]; //without useMemo

    const fruits = useMemo(() => {
    return ["Apple", "Banana", "Orange", "Grapes", "Mango", "Pineapple","Peach","papaya"];
  }, []);

  return (
    <div>
      {/* <h2>Without useMemo</h2> */}

      <h2>With useMemo</h2>

      <h3>Counter : {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increment Counter
      </button>

      <Child fruits={fruits} />
    </div>
  );
}

export default Parent;