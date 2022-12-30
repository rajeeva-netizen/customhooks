import React from "react";

const PreviousCount = (value) => {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

export default PreviousCount;
