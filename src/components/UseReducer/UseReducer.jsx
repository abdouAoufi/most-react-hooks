import React, { useState, useReducer } from "react";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";

/*
===================================================

In this file we will learn about useReducer hook ..
useReducer is usally preferable to useState in some cases. when you have complex stat logic
to change with one action ..

## implementation : 

In our example we want to change the text of button as well as the text in body of the page when
the user log in 
1 - first we used normal method which is use state and when the user click login button there two
states need to be changed the text in button, the text in header of the page.
2 - In the second case we used the useReducer hook it let us change more values, by clicking in 
the login button the dipatch action will fire with correspandant type and that will lead to change 
of the button satate and the text in the header.

*/

const initilaState = {
  authState: false,
  authText: "User not login",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "LOG_IN":
      return {
        authState: !state.authState,
        authText: "User already logged in",
      };
    case "LOG_OUT":
      return initilaState;
    default:
      return state;
  }
};

function UseMemo() {
  const [authState, dispatch] = useReducer(reducer, initilaState);

  /* 
  const [isLogged, setLog] = useState(false);
  const [loginText, setLoginText] = useState(defalultLogText);

  1 example ======================================
  const handleAuthentication = () => {            
    if (!isLogged) {
      setLog(true);
      setLoginText("User is already login");
    } else {
      setLog(false);
      setLoginText(defalultLogText);
    }
  };
  ===============================================
  */

  const handleAuthentication = () => {
    if (authState.authState) {
      dispatch({ type: "LOG_OUT" });
    } else {
      dispatch({ type: "LOG_IN" });
    }
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            Use reducer
          </Typography>
          <Button
            onClick={handleAuthentication}
            color="inherit"
            sx={{ fontWeight: "bold" }}
          >
            {authState.authState ? "Log out" : "Log in"}
          </Button>
        </Toolbar>
      </AppBar>
      <Typography textAlign="center" marginTop={4} variant="p" component="p">
        {authState.authText}
      </Typography>
    </div>
  );
}

export default UseMemo;
