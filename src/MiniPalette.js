import React from 'react';
import { Box } from '@mui/system';
import styles from './styles/MiniPaletteStyles';

export default function MiniPalette(props) {
  const { paletteName, emoji, colors } = props;
  const miniColorBoxes = colors.map(color => (
    <Box
      sx={{ backgroundColor: color.color, ...styles.miniColor }}
      key={color.name}
    />
  ));

  return (
    <Box sx={styles.root} onClick={props.handleClick}>
      <Box sx={styles.colors}>{miniColorBoxes}</Box>
      <Box component='h5' sx={styles.title}>
        {paletteName}
        <Box component='span' sx={styles.emoji}>
          {emoji}
        </Box>
      </Box>
    </Box>
  );
}
