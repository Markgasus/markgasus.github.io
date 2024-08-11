import logo from './logo.svg';
import './App.css';

const { Container, Typography } = require("@mui/material");

function App() {
  return (
    <Container sx={{ bgcolor: "tomato", height: "100vh" }}>
      <Typography variant='h3'>Hello</Typography>
    </Container>
  );
}

export default App;

