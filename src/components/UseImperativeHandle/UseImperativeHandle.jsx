/*

===================================================

In this file we will learn about UseImperativeHandle hook ..
This hook let us control the child component from the parent without using props
We will need to pass ref to that component but the problem we can't pass ref to JSX element 
so we need something to be in the child which is forwardRef. 

## implementation : 

1 - We create child component and we want to run a function that is inside that component.
2 - In order to do that we need reference to that child component but the problem as we said before 
we can't use  ref with JSX so we used forwardRef in child cmp.
3 - After the we defined our hook useImperativeHandle which accept the ref as argument and return a function.
4 - That function being returned from the child. Now we can access it from the parent component

!Check out the child component
Aoufi Abderahmane GitHub 2021
====================================================

*/

import React, { useRef } from "react";
import Button from "@mui/material/Button";
import Child from "./Child/Child";
import Navbar from "../Navbar/Navbar";
import Box from "@mui/material/Box";

function UseImperativeHandle() {
  const childRef = useRef(null);
  return (
    <div>
      <Navbar
        hook="Use imperative layout"
        onClick={undefined}
        btnText="Get started"
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          placeItems: "center",
          alignText: "center",
        }}
      >
        <Button
          onClick={() => {
            childRef.current.alterToggle();
          }}
          sx={{ m: 4, width: "200px" }}
          variant="contained"
        >
          Parent's Button
        </Button>
        <Child ref={childRef} />
      </Box>
    </div>
  );
}

export default UseImperativeHandle;
