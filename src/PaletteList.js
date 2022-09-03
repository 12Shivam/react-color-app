import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from './withRouter';
import { Box } from '@mui/system';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyles';

class PaletteList extends Component {
  goToPalette(id) {
    this.props.navigate(`/palette/${id}`);
  }
  render() {
    const { palettes, deletePalette } = this.props;
    return (
      <Box sx={styles.root}>
        <Box sx={styles.container}>
          <Box component='nav' sx={styles.nav}>
            <Box component='h1'>React Component</Box>
            <Link to='/palette/new'>Create Palette</Link>
          </Box>
          <Box sx={styles.palettes}>
            {palettes.map(palette => (
              <MiniPalette
                {...palette}
                key={palette.id}
                id={palette.id}
                handleClick={() => this.goToPalette(palette.id)}
                handleDelete={deletePalette}
              />
            ))}
          </Box>
        </Box>
      </Box>
    );
  }
}

export default withRouter(PaletteList);
