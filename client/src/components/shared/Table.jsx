import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Paper, Typography, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//custom theme to override default icons of muiDataGrid
const theme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          '& .MuiDataGrid-sortIcon': {
            color: 'white', // Change sort icon color to white
          },
          '& .MuiDataGrid-menuIconButton': {
            color: 'white', // Change menu icon button color to white
          },
          '& .MuiSvgIcon-root': {
            color: 'white', // Ensure that the icon itself is white
          },
          '& .MuiDataGrid-columnSeparator': {
            display: 'none', // Optional: hide the column separator lines
          },
        },
      },
    },
  },
});

const Table = ({ rows, columns, heading, rowHeight = 52 }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          height: "100vh",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: "1rem 4rem",
            borderRadius: "1rem",
            margin: "auto",
            width: "100%",
            overflow: "hidden",
            height: "100%",
            boxShadow: "none",
          }}
        >
          <Typography
            textAlign={"center"}
            variant="h4"
            sx={{
              margin: "2rem",
              textTransform: "uppercase",
            }}
          >
            {heading}
          </Typography>
          <DataGrid
            rows={Array.isArray(rows) ? rows : []}
            columns={Array.isArray(columns) ? columns : []}
            rowHeight={rowHeight}
            style={{
              height: "80%",
            }}
            sx={{
              border: "none",
              ".table-header": {
                backgroundColor: "black",
                color: "white",
              },
            }}
          />
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Table;
