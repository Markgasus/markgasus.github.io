import React, { useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';

function ProjectDisplay({ logo, name, image }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Paper
      elevation={3}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        width: '100%',
        maxWidth: 400,
        height: 500,
        position: 'relative',
        transition: 'transform 0.3s, box-shadow 0.3s',
        borderRadius: 2,
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 6,
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1,
          borderRadius: 2,
        }}
      />

      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          p: 2,
        }}
      >
        {logo && (
          <Box
            component="img"
            src={logo}
            alt={`${name} logo`}
            sx={{
              width: 200,
              height: 'auto',
              position: 'absolute',
              top: -80,
              left: '50%',
              transform: 'translateX(-50%)',
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
              zIndex: 3,
              pointerEvents: isHovered ? 'auto' : 'none', // Prevent hover events when not visible
            }}
          />
        )}

        <Box
          sx={{
            position: 'absolute',
            bottom: '60px',
            left: '25px',
            textAlign: 'left',
            zIndex: 20,
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: 'white',
              fontSize: '1.75rem',
              fontWeight: 'bold',
            }}
          >
            {name}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}

export default ProjectDisplay;
