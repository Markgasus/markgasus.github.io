// App.js
import React from 'react';
import { Container, Typography } from '@mui/material';
import ProjectDisplay from './components/ProjectDisplay'; // Adjust the path based on your directory structure

function App() {
  return (
    <Container sx={{ my: 10 }}>
      <Typography variant="h1" sx={{ my: 3, textAlign: 'center', color: 'primary.main' }}>
        Hello, I'm Mark.
      </Typography>
      <Typography variant="h2" sx={{ textAlign: 'center', color: 'secondary.main' }}>
        Game Designer & Developer
      </Typography>

      <ProjectDisplay
        logo="./assets/toon_tag_logo.png"
        name="Toon Tag Remake"
        type="Game Development & Design"
        year="2025"
        description="Built in Unreal Engine. Coming 2025."
      />
    </Container>
  );
}

export default App;
