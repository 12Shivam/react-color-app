import React from 'react';
import { Box } from '@mui/system';

export default function MiniPalette(props) {
  const { paletteName, emoji } = props;
  return (
    <Box
      component='div'
      sx={{
        backgroundColor: 'white',
        border: '1px solid black',
        borderRadius: '5px',
        p: '0.5rem',
        position: 'relative',
        overflow: 'hidden',
        ':hover': {
          cursor: 'pointer',
        },
      }}
    >
      <Box component='div' sx={{ backgroundColor: 'grey' }}></Box>
      <Box
        component='h5'
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          m: 0,
          color: 'black',
          pt: '0.5rem',
          fontSize: '1rem',
          position: 'relative',
        }}
      >
        {paletteName}
        <Box
          component='span'
          sx={{
            ml: '0.5rem',
            fontSize: '1.5rem',
          }}
        >
          {emoji}
        </Box>
      </Box>
    </Box>
  );
}
