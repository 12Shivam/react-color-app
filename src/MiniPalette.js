import React, { Component } from 'react';
import { Box } from '@mui/system';
import styles from './styles/MiniPaletteStyles';
import DeleteIcon from '@mui/icons-material/Delete';

export default class MiniPalette extends Component {
  constructor(props) {
    super(props);
    this.deletePalette = this.deletePalette.bind(this);
  }
  deletePalette(e) {
    e.stopPropagation();
    this.props.handleDelete(this.props.id);
  }
  render() {
    const { paletteName, emoji, colors, handleClick } = this.props;
    const miniColorBoxes = colors.map(color => (
      <Box
        sx={{ backgroundColor: color.color, ...styles.miniColor }}
        key={color.name}
      />
    ));
    return (
      <Box sx={styles.root} onClick={handleClick}>
        <DeleteIcon sx={styles.deleteIcon} onClick={this.deletePalette} />
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
}
