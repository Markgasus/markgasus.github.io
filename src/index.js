import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196F3", // Bright Blue
    },
    secondary: {
      main: "#BBDEFB", // Light Blue
    },
    background: {
      default: "#121212", // Gray background
      paper: "#1A1A1A", // Slightly lighter black for cards and paper components
    },
    text: {
      primary: "#FFFFFF", // White text
      secondary: "#BBDEFB", // Light blue text for secondary
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Set default font family
    h1: {
      fontSize: "6rem",
      fontWeight: 1000,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 1000,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// Performance measuring
reportWebVitals();
