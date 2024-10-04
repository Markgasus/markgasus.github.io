import React from 'react';
import { Container, Typography, Box, Grid, Button, Avatar, IconButton, Divider } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ProjectDisplay from './components/ProjectDisplay'; // Adjust the path based on your directory structure

function App() {
  const handleDownloadCV = () => {
    // Logic to download CV can go here
    window.open('path/to/your_cv.pdf', '_blank'); // Adjust the path to your CV file
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default', color: 'text.primary' }}>
      {/* Hero Section as About Me */}
      <Box sx={{ py: 10 }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Typography variant="h1" sx={{ mb: 2, fontFamily: 'Arial, sans-serif' }}>
                I'm Mark
              </Typography>
              <Typography variant="h2" sx={{ mb: 4, color: 'primary.main', fontFamily: 'Arial, sans-serif' }}>
                Game Developer & Designer
              </Typography>
              <Typography sx={{ mb: 4 }}>
                I am a passionate game developer and designer with experience in creating engaging
                and interactive experiences. I love building immersive worlds and gameplay systems that 
                captivate players. My skills include working with Unity, Unreal Engine, and a variety of 
                programming languages. I'm always eager to learn and take on new challenges in the gaming 
                industry.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                <IconButton
                  color="primary"
                  href="https://twitter.com/markgasus" // Replace with your Twitter URL
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  href="https://linkedin.com/in/yourusername" // Replace with your LinkedIn URL
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={handleDownloadCV}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    boxShadow: '0 0 20px rgba(63, 81, 181, 0.6)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: '8px',
                      background: 'rgba(63, 81, 181, 0.3)',
                      opacity: 0,
                      transition: 'opacity 0.4s',
                    },
                    '&::before:hover': {
                      opacity: 1,
                    },
                  },
                }}
              >
                Download CV
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} display="flex" justifyContent="center">
              <Avatar
                alt="Mark Francalangia"
                src="https://media.licdn.com/dms/image/v2/D4E03AQG8nakpLMXjpA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711062102153?e=1733356800&v=beta&t=Lrd9hb3942eK4ZtFImnWEXy4wvqrfz21VRTH-sfrqHs" // Your picture path
                sx={{ width: '100%', height: 'auto', maxWidth: 400 }} // Adjust size as necessary
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider sx={{ my: 2, backgroundColor: 'primary.main' }} /> {/* Blue Separator */}

      {/* Project Row Section */}
      <Container id="projects" sx={{ my: 20 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
            <ProjectDisplay
              logo="./assets/toon_tag_logo.png"
              image="./assets/FxpnQcNX0AI0s1D.jpg"
              name="Toon Tag Remake"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
            <ProjectDisplay
              logo="./assets/another_logo.png"
              image="./assets/another_image.jpg"
              name="Another Project"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
            <ProjectDisplay
              logo="./assets/yet_another_logo.png"
              image="./assets/yet_another_image.jpg"
              name="Yet Another Project"
            />
          </Grid>
        </Grid>
      </Container>

      {/* Footer Section */}
      <Box sx={{ py: 5, textAlign: 'center', backgroundColor: '#1A1A1A' }}>
        <Typography>
          © {new Date().getFullYear()} Mark Francalangia. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
