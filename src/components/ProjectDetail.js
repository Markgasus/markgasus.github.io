import React, { useEffect } from 'react'; // Import useEffect
import { Container, Typography, Box, Grid, Button } from '@mui/material'; // Import Button
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { motion } from 'framer-motion';

const ProjectDetail = () => {
  // Scroll to the top on component mount
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);

  // Navigate function
  const navigate = useNavigate(); // Initialize useNavigate

  // Project data
  const projectData = {
    TTR: {
      title: "Toontown Rewritten",
      logo: process.env.PUBLIC_URL + "/assets/TTR.png?v=1",
      description: "Designed and implemented client and server-side gameplay functionality and systems for a large-scale MMO powered by Astron, Panda3D, and Python, serving over 2 million registered users and supporting thousands of concurrent players.",
      skills: [
        { name: "Python", image: process.env.PUBLIC_URL + "/assets/Python.png" },
        { name: "Panda3D", image: process.env.PUBLIC_URL + "/assets/Panda3D.png" },
        { name: "Astron", image: process.env.PUBLIC_URL + "/assets/Astron.png" },
      ],
    },
    toontag: {  // Match the lowercase URL from App.js
      title: "Toon Tag Remake",
      logo: process.env.PUBLIC_URL + "/assets/Toon_Tag_Logo.png?v=1",
      description: "A faithful recreation of the classic Toontown minigame that captures the nostalgic atmosphere of Epcot from the late 90s and early 2000s. Utilizing Unreal Engine's Blueprint system, the game features enhanced network replication and smooth gameplay mechanics. The project involved carefully porting and optimizing 3D assets from the original Panda3D engine to Unreal Engine through Autodesk Maya, ensuring an authentic yet modernized experience.",
      skills: [
        { name: "Unreal Engine", image: process.env.PUBLIC_URL + "/assets/UnrealEngine.png" },
        { name: "C#", image: process.env.PUBLIC_URL + "/assets/Csharp.png" },
      ],
    },
  };

  // Get project ID from URL
  const { projectId } = useParams();
  const project = projectData[projectId];

  // Handle project not found
  if (!project) {
    return <Typography variant="h5" sx={{ textAlign: 'center', py: 5 }}>Project not found.</Typography>;
  }

  return (
    <Box sx={{ minHeight: '100vh', py: 5, backgroundColor: 'background.default', color: 'text.primary' }}>
      <Container component={motion.div} initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } }}>
        {/* Centered Project Content */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '800px', mx: 'auto' }}>
          <img 
            src={project.logo} 
            alt={project.title} 
            style={{ 
              width: '60%', 
              height: 'auto', 
              marginBottom: '2rem' 
            }} 
          />
          <Typography variant="body1" sx={{ mb: 4, textAlign: 'left' }}>{project.description}</Typography>
          
          <Box sx={{ width: '100%' }}>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 2,
                textDecoration: 'underline',
                textUnderlineOffset: '5px',
                fontWeight: 'bold',
                textAlign: 'left',
                alignSelf: 'flex-start'
              }}
            >
              Technologies Used
            </Typography>
            <Grid container spacing={2} justifyContent="flex-start" sx={{ maxWidth: '400px' }}>
              {project.skills.map((skill, index) => (
                <Grid item xs={4} sm={3} key={index} display="flex" flexDirection="column" alignItems="center">
                  <img src={skill.image} alt={skill.name} style={{ width: '50px', height: '50px' }} />
                  <Typography variant="body2" sx={{ textAlign: 'center', fontSize: '1.1rem' }}>{skill.name}</Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Back to Home Button */}
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button variant="contained" onClick={() => navigate('/')}> {/* Adapted for HashRouter */}
            Back to Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectDetail;
