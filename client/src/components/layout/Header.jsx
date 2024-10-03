import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { orange } from "../../constants/color";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Group as GroupIcon,
  Logout as LogOutIcon
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
  const handlemobile = () => {
    console.log("Mobile");
  };
  const openSeachDialog = () => {
    console.log("skds");
  };
  const openNewGroup = () => {
    console.log("skds");
  };
  const navigateToGroup = () => {
    navigate("/group")
  };
  const logoutHandler = () => {
    console.log("skjs")
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: orange,
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              Chat.io
            </Typography>

            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color="inherit" onClick={handlemobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <IconButton
                color="inherit"
                size="large"
                onClick={openSeachDialog}
              >
                <SearchIcon />
              </IconButton>
              <Tooltip title="New group">
                <IconButton color="inherit" size="large" onClick={openNewGroup}>
                  <AddIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Manage Groups">
              <IconButton color="inherit" size="large" onClick={openNewGroup}>
                  <GroupIcon onClick={navigateToGroup} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Logout">
              <IconButton color="inherit" size="large" onClick={logoutHandler}>
                  <LogOutIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
