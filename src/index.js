import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material';

// Define the theme for your app
const theme = createTheme({
  palette: {
    primary: { main: "#2196F3" },
    secondary: { main: "#BBDEFB" },
    background: { default: "#121212", paper: "#1A1A1A" },
    text: { primary: "#FFFFFF", secondary: "#BBDEFB" },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: { fontSize: "7rem", fontWeight: 1000 },
    h2: { fontSize: "4rem", fontWeight: 1000 },
    h3: { fontSize: "3rem", fontWeight: 1000 },
  },
});

// Render the app with the theme applied
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// Optionally measure performance (you can remove this if you don't need it)
reportWebVitals();
