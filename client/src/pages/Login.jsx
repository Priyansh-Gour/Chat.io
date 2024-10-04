import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Avatar,
  IconButton,
  InputAdornment,
} from "@mui/material";

import {
  CameraAlt as CameraAltIcon,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

import { VisuallyHiddenInput } from "../components/Styles/StyledComponent";
import {useFileHandler, useInputValidation,useStrongPassword} from '6pp';
import { usernameValidator } from "../utils/validators";

const Login = () => {
  const [isLogin, setLogin] = useState(true);
  const toggleLogin = () => setLogin((prev) => !prev);

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("",usernameValidator);
  const password = useStrongPassword();

  const avatar = useFileHandler("single",10);

  const handleLogin = (e) =>{
    e.preventDefault();
  }
  const handleSignup = (e) =>{
    e.preventDefault();
  }

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
              onSubmit={handleLogin}
            >
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Password"
                margin="normal"
                variant="outlined"
                type="password"
                value={password.value}
                onChange={password.changeHandler}
              />
              <Button
                sx={{ marginTop: "1rem" }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Login
              </Button>
              <Typography textAlign="center" m="1rem">
                OR
              </Typography>
              <Button fullWidth variant="text" onClick={toggleLogin}>
                Sign Up
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Sign Up</Typography>
            <form onSubmit={handleSignup}>
              <Stack position="relative" width="10rem" margin="auto">
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
                  src={avatar.preview}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.5)",
                    ":hover": {
                      bgcolor: "rgba(0,0,0,0.7)",
                    },
                  }}
                  component="label"
                >
                  <CameraAltIcon />
                  <VisuallyHiddenInput type="file" onChange={avatar.changeHandler}/>
                </IconButton>
              </Stack>
              {
                  avatar.error && (
                    <Typography m={"1rem auto"} width={"fit-content"} display={"block"} color="error" variant="caption">
                      {avatar.error}
                    </Typography>
                  )
                }
              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />

              {
                username.error && (
                  <Typography color="error" variant="caption">
                    {username.error}
                  </Typography>
                )
              }

              <TextField
                required
                fullWidth
                label="Password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />

              {
                password.error && (
                  <Typography color="error" variant="caption">
                    {password.error}
                  </Typography>
                )
              }


              <Button
                sx={{ marginTop: "1rem" }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Sign Up
              </Button>
              <Typography textAlign="center" m="1rem">
                OR
              </Typography>
              <Button fullWidth variant="text" onClick={toggleLogin}>
                Login Instead!!
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};
export default Login;