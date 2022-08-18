import React from 'react';
import { Box } from '@mui/system';

const styleSX = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    ':hover': {
      cursor: 'pointer',
    },
  },
  colors: {
    backgroundColor: '#dae1e4',
    height: '150px',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    paddingTop: '0.5rem',
    fontSize: '1rem',
    position: 'relative',
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1.5rem',
  },
  miniColor: {
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-3.5px',
  },
};

export default function MiniPalette(props) {
  const { paletteName, emoji, colors } = props;
  const miniColorBoxes = colors.map(color => (
    <Box sx={styleSX.miniColor} key={color.name} />
  ));

  return (
    <Box sx={styleSX.root}>
      <Box sx={styleSX.colors}>{miniColorBoxes}</Box>
      <Box component='h5' sx={styleSX.title}>
        {paletteName}
        <Box component='span' sx={styleSX.emoji}>
          {emoji}
        </Box>
      </Box>
    </Box>
  );
}
