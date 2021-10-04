/*

===================================================

In this file we will learn about useLayout hook ..
It's UI based hook. set up UI before fetching data for example.

## implementation : 

1 - We notice the use layout effect will fire before the regulat use effect!
(use effect load after the page is rendred ) but use layout works before
2 - We create an input and bind it with reference then when we access the value 
from the use layout effect we see the first value even though the useeffect update
the value. So we can say that useLayoutEffect is acceble before useEffect
 


====================================================

*/

import React, { useEffect, useLayoutEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Box from "@mui/material/Box";

function UseLayout() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.value = "Aoufi abderahmen";
  }, []);
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);
  return (
    <Box>
      <Navbar onClick={alert} btnText="Start" hook="Use layout" />
      <Box display="flex" justifyContent="center" marginTop={4}>
        <input ref={inputRef} type="text" value="Abderahmane" />
      </Box>
    </Box>
  );
}

export default UseLayout;
