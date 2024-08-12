// ProjectDisplay.js
import React from 'react';
import { Box, Paper, Typography, Button } from '@mui/material';

function ProjectDisplay({ logo, name, type, year, description }) {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        my: 4,
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 6,
        },
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box flex={1} mr={4}>
          <Typography variant="h3" sx={{ color: 'primary.main', mb: 1 }}>
            {name}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 2 }}>
            {type} * {year}
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
            {description}
          </Typography>
          <Button variant="contained" color="primary">
            Learn More
          </Button>
        </Box>
        {logo && (
          <Box
            component="img"
            src={logo}
            alt={`${name} logo`}
            sx={{ width: 400, height: 400 }}
          />
        )}
      </Box>
    </Paper>
  );
}

export default ProjectDisplay;
