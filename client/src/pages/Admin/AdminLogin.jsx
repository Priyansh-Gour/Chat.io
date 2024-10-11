import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, IconButton, InputAdornment } from '@mui/material';
import { bgGradient } from '../../constants/color';
import { useInputValidation } from '6pp';
import { Navigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const isAdmin = false;

const AdminLogin = () => {
  const secretKey = useInputValidation("");
  const [showSecretKey, setShowSecretKey] = useState(false);

  const toggleShowSecretKey = () => {
    setShowSecretKey((prevShowSecretKey) => !prevShowSecretKey);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  if (isAdmin) return <Navigate to="/admin/dashboard" />;

  return (
    <div
      style={{
        backgroundImage: bgGradient,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <>
            <Typography variant="h5">Admin Login</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
              onSubmit={submitHandler}
            >
              <TextField
                required
                fullWidth
                label="Secret Key"
                // type={showSecretKey ? "text" : "password"}
                margin="normal"
                variant="outlined"
                value={secretKey.value}
                onChange={secretKey.changeHandler}
                // InputProps={{
                //   endAdornment: (
                //     <InputAdornment position="end">
                //       <IconButton onClick={toggleShowSecretKey} edge="end">
                //         {showSecretKey ? <VisibilityOff /> : <Visibility />}
                //       </IconButton>
                //     </InputAdornment>
                //   )
                // }}
              />
              <Button
                sx={{ marginTop: '1rem' }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Login
              </Button>
            </form>
          </>
        </Paper>
      </Container>
    </div>
  );
};

export default AdminLogin;

//Import useState: The useState hook is used to manage the visibility state of the secret key.
//State Management: A state variable showSecretKey is initialized to false, indicating that the secret key is hidden by default.
//Toggle Function: The toggleShowSecretKey function toggles the showSecretKey state between true and false.
//TextField Modification: The type attribute of the TextField changes between "text" and "password" based on the showSecretKey state. An InputAdornment with an IconButton is added to toggle visibility.
