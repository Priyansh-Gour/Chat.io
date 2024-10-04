import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { lazy, Suspense, useState } from "react";
import { orange } from "../../constants/color";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Group as GroupIcon,
  Logout as LogOutIcon,
  Notifications as NotificationIcon
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SearchDialog = lazy(()=>import("../specific/Search"));
const NotificationDialog = lazy(()=>import("../specific/Notifications"));
const NewGroupDialog = lazy(()=>import("../specific/NewGroups"));

const Header = () => {
    const navigate = useNavigate();
    const [isMobile,setisMobile] = useState(false);
    const [isSearch,setisSearch] = useState(false);
    const [isNewGroup,setisNewGroup] = useState(false);
    const [isNotification,setisNotification] = useState(false);


  const handlemobile = () => {
    setisMobile((prev)=>!prev);
  };
  const openSearch = () => {
    setisSearch((prev)=>!prev);
  };
  const openNewGroup = () => {
    setisNewGroup((prev)=>!prev);
  };
  const openNotification = () =>{
    setisNotification((prev)=>!prev);
  }
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
              <IconBtn title={"Search"} icon={<SearchIcon />} onClick={openSearch} />
              <IconBtn title={"New group"} icon={<AddIcon />} onClick={openNewGroup}/>
              <IconBtn title={"Manage Groups"} icon={<GroupIcon/>} onClick={navigateToGroup}/>
              <IconBtn title={"Notifications"} icon={<NotificationIcon/>} onClick={openNotification}/>
              <IconBtn title={"Logout"} icon={<LogOutIcon />} onClick={logoutHandler} />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {
        isSearch && <Suspense fallback={<Backdrop open/>}> <SearchDialog/> </Suspense>
      }
      {
        isNotification && <Suspense fallback={<Backdrop open/>}> <NotificationDialog/> </Suspense>
      }
      {
        isNewGroup && <Suspense fallback={<Backdrop open/>}> <NewGroupDialog/> </Suspense>
      }

    </>
  );
};

const IconBtn = ({title,icon,onClick}) =>{
  return (
  <Tooltip title={title}>
    <IconButton color="inherit" size="large" onClick={onClick}>
      {icon}
    </IconButton>
  </Tooltip>
  );
}

export default Header;
