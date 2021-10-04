/*
===================================================

In this file we will learn about useRef hook ..
Basically it's used to intereact with DOM elemtnt directly so whenver u want 
to acxess DOM elemnt just use it.
int this example we will explore more .....

## implementation : 

1 - First we defined a variable to hold refernce to DOM element in our case it's an intput
then we bind it on JSX using ref prop ,
2 - When user click start wrtiting the input will get focused. How could this happen? 
It happens because of ref we pin on the DOM element so when user click to the button 
the ref will tell the input to focus.
3 - When user click display name button the ref will tell react that the current value of 
the input is ... and react will update the state of name variable then it compares the old virtual 
DOM if it see a changes it will create new virtual DOM and that cause the real DOM to change and
displat current name. this is callled one way data flow. that means the state who control the 
element not the inverse and this is the power of react!

*/

import React, { useRef } from "react";
import Box from "@mui/material/Box";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function UseRef() {
  const nameTextField = useRef(null);
  const [name, setName] = React.useState("");
  const startWriting = () => {
    nameTextField.current.focus();
  };
  const diplayName = () => {
    setName(nameTextField.current.value);
  };
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography flexGrow={1} variant="h6" component="div">
            Use ref
          </Typography>
          <Button sx={{ fontWeight: "bold" }} color="inherit">
            Get started
          </Button>
        </Toolbar>
      </AppBar>

      <Typography
        textAlign="center"
        variant="h4"
        component="h4"
        fontWeight="bold"
        mt={4}
      >
        {name}
      </Typography>

      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "center", mt: 2 }}
        component="form"
        noValidate
        autoComplete="off"
      >
        <input ref={nameTextField} type="text" />
        <Button
          onClick={startWriting}
          variant="contained"
          sx={{ mx: 1, fontWeight: "bold" }}
        >
          start write
        </Button>
        <Button
          onClick={diplayName}
          variant="contained"
          sx={{  fontWeight: "bold" }}
        >
          display name
        </Button>
      </Box>
    </Box>
  );
}

export default UseRef;
