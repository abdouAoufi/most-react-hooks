import React from "react";
import Box from "@mui/material/Box";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Home";
import { Button } from "@mui/material ";
import { Typography } from "@mui/material ";
import { Link } from "react-router-dom";

function Navbar({ hook, onClick, btnText }) {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            aria-label="menu"
            size="large"
            sx={{ mx: 1 }}
            color="inherit"
          >
            <Link to="/">
              <MenuIcon />
            </Link>
          </IconButton>
          <Typography
            sx={{ flexGrow: 1 }}
            variant="p"
            component="div"
            color="inherit"
          >
            {hook}
          </Typography>
          <Button color="inherit" onClick={onClick} sx={{ fontWeight: "bold" }}>
            {btnText}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
