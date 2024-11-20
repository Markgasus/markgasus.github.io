import React, { useEffect } from 'react';
import { Container, Box, Grid, Button, Avatar, IconButton, Divider, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ProjectDisplay from './components/ProjectDisplay';
import ProjectDetail from './components/ProjectDetail'; // Import the new ProjectDetail component
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use BrowserRouter for clean URLs

// Animation variant for fade-in effect
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Home page component
const HomePage = () => {
  const handleDownloadCV = () => {
    window.open(process.env.PUBLIC_URL + '/Resume_Mark_Francalangia.pdf', '_blank'); // Use PUBLIC_URL for correct file paths
  };

  return (
    <Box sx={{ minHeight: '100vh', py: 10, backgroundColor: 'background.default', color: 'text.primary' }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* Introduction Section */}
          <Grid
            item
            xs={12}
            sm={6}
            component={motion.div}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 1 }}
          >
            <Typography variant="h1" sx={{ mb: 2, fontFamily: 'Arial, sans-serif' }}>
              I'm Mark
            </Typography>
            <Typography variant="h3" sx={{ mb: 4, color: 'primary.main', fontFamily: 'Arial, sans-serif' }}>
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
              {/* Social Media Links */}
              <IconButton color="primary" href="https://twitter.com/markgasus" target="_blank" rel="noopener noreferrer">
                <TwitterIcon />
              </IconButton>
              <IconButton
                color="primary"
                href="https://linkedin.com/in/markfrancalangia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
            {/* Download CV Button */}
            <Button variant="contained" color="primary" onClick={handleDownloadCV}>
              Download CV
            </Button>
          </Grid>
          {/* Avatar Section */}
          <Grid
            item
            xs={12}
            sm={6}
            display="flex"
            justifyContent="center"
            component={motion.div}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 1.1, delay: 0.1 }}
          >
            <Avatar
              alt="Mark Francalangia"
              src="https://media.licdn.com/dms/image/v2/D4E03AQG8nakpLMXjpA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711062102153?e=1733356800&v=beta&t=Lrd9hb3942eK4ZtFImnWEXy4wvqrfz21VRTH-sfrqHs"
              sx={{ width: '100%', height: 'auto', maxWidth: 400 }}
            />
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ my: 10, backgroundColor: 'primary.main' }} />

      {/* Projects Section */}
      <Container id="projects" sx={{ pb: 5, my: 5 }}>
        <Typography
          variant="h2"
          sx={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', mb: 12 }}
          component={motion.div}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          Projects
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              logo: process.env.PUBLIC_URL + '/assets/TTR.png',
              image: process.env.PUBLIC_URL + '/assets/TTR_Key_Art.png',
              name: 'Toontown Rewritten',
              link: '/TTR',
            },
            {
              logo: process.env.PUBLIC_URL + '/assets/Toon_Tag_Logo.png',
              image: process.env.PUBLIC_URL + '/assets/Toon_Tag_DIZ.png',
              name: 'Toon Tag Remake',
              link: '/toontag',
            },
          ].map((project, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              display="flex"
              justifyContent="center"
              sx={{ pb: { xs: 15, sm: 0 } }}
              component={motion.div}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 1.3 + index * 0.1, delay: 0.3 + index * 0.1 }}
              key={index}
            >
              <ProjectDisplay {...project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

// Main App component with routing
function App() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:projectId" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
