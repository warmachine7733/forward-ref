import React from "react";
import { useImperativeHandle } from "react";

const FancyButton = React.forwardRef((props, ref) => {
  function child() {
    console.log(" call child");
  }
  useImperativeHandle(ref, () => ({
    child,
  }));

  return (
    <button ref={ref} className="FancyButton">
      {props.children}
    </button>
  );
});

export default FancyButton;
