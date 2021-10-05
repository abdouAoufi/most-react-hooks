import React, { forwardRef, useImperativeHandle } from "react";
import Button from "@mui/material/Button";

const Child = forwardRef((props, ref) => {
  const [toggle, setToggle] = React.useState(false);
  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <div>
      <Button variant="contained">Child's button</Button>
      {toggle && <p>Toggle</p>}
    </div>
  );
});

export default Child;
