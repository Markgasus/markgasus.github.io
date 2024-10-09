import React from 'react';
import { Container, Box, Grid, Button, Avatar, IconButton, Divider, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ProjectDisplay from './components/ProjectDisplay';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  const handleDownloadCV = () => {
    window.open('path/to/your_cv.pdf', '_blank');
  };

  return (
    <Box sx={{ minHeight: '100vh', py: 5, backgroundColor: 'background.default', color: 'text.primary' }}>
      <Box sx={{ py: 5 }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} sm={6} component={motion.div} initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 1 }}>
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
                <IconButton color="primary" href="https://twitter.com/markgasus" target="_blank" rel="noopener noreferrer">
                  <TwitterIcon />
                </IconButton>
                <IconButton color="primary" href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
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
            <Grid item xs={12} sm={6} display="flex" justifyContent="center" component={motion.div} initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 1.1, delay: 0.1 }}>
              <Avatar
                alt="Mark Francalangia"
                src="https://media.licdn.com/dms/image/v2/D4E03AQG8nakpLMXjpA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711062102153?e=1733356800&v=beta&t=Lrd9hb3942eK4ZtFImnWEXy4wvqrfz21VRTH-sfrqHs"
                sx={{ width: '100%', height: 'auto', maxWidth: 400 }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider sx={{ my: 2, backgroundColor: 'primary.main' }} />

      <Container id="projects" sx={{ pb: 5, my: 5 }}>
        <Typography
          variant="h2"
          sx={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', mb: 12 }}
          component={motion.div} initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 1.2, delay: 0.2 }}
        >
          Projects
        </Typography>
        <Grid container spacing={4} justifyContent="center">
        {[
          { logo: "./assets/TTR.png", image: "./assets/TTR_Key_Art.png", name: "Toontown Rewritten", link: "https://toontownrewritten.com" },
          { logo: "./assets/toon_tag_logo.png", image: "./assets/toon_tag_diz.png", name: "Toon Tag Remake", link: "https://toontagremake.com" },
        ].map((project, index) => (
          <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center" sx={{ pb: { xs: 15, sm: 0 } }} component={motion.div} initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 1.3 + index * 0.1, delay: 0.3 + index * 0.1 }} key={index}>
            <ProjectDisplay {...project} />
          </Grid>
        ))}
      </Grid>
      </Container>

      <Box sx={{ py: 5, textAlign: 'center', backgroundColor: '#1A1A1A' }} component={motion.div} initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 1.6, delay: 0.6 }}>
        <Typography>© {new Date().getFullYear()} Mark Francalangia. All rights reserved.</Typography>
      </Box>
    </Box>
  );
}

export default App;
