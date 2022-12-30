import React from "react";
import PreviousCount from "./previousCount";
function count() {
  const [count, setCount] = React.useState(0);
  const prevCount = PreviousCount(count);

  // React.useEffect(() => {
  //   prevCount.current = count;
  // }, [count]);
  return (
    <>
      <p>Count:{count}</p>
      <p>before: {prevCount}</p>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </>
  );
}

export default count;
