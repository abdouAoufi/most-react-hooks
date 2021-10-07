/*

===================================================

In this file we will learn about useMemo hook ..
this hook is built for performance 
We don't use it too much anyway but we should consider to use it.


## implementation : 

1 -  In this example we don't want to call doHardComputation in every render.
2 -  So the solution here would be useMemo hook, After we import it from react
we define it the implemtntation is quite easy to do
3 -  Right now whenever the value returned from doHardComputation changed it 
will execute that function other wise we do nothing.

Aoufi Abderahmane GitHub 2021
====================================================

*/

import React, { useState, useMemo } from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

function UseMemo() {
  const [toggle, setToggle] = useState(false);

  const doHardComputation = () => {
    // This is like we run a long algorithms
    console.log("Algo finished!");
    return "result";
  };
  const getComputationResult = useMemo(() => doHardComputation(), []);
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 4,
        flexDirection: "column",
        placeItems: "center",
      }}
    >
      <div>{getComputationResult}</div>
      <Button
        onClick={() => setToggle(!toggle)}
        variant="contained"
        size="large"
      >
        Alter
      </Button>
      {toggle && <h1>I'm intressted in toggle state but not on algorithm</h1>}
    </Box>
  );
}

export default UseMemo;
