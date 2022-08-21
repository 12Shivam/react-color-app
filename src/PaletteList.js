import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withRouter } from './withRouter';
import { Box } from '@mui/system';

const styleSX = {
  root: {
    backgroundColor: 'blue',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: 'white',
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%',
  },
};

class PaletteList extends Component {
  // goToPalette(id) {
  //   this.props.navigate(`/palette/${id}`);
  // }
  render() {
    const { palettes } = this.props;
    return (
      <Box sx={styleSX.root}>
        <Box sx={styleSX.container}>
          <Box component='nav' sx={styleSX.nav}>
            <Box component='h1'>React Component</Box>
          </Box>
          <Box sx={styleSX.palettes}>
            {palettes.map(palette => (
              <MiniPalette
                {...palette}
                handleClick={() =>
                  // this.goToPalette(palette.id);
                  this.props.navigate(`/palette/${palette.id}`)
                }
              />
            ))}
          </Box>
        </Box>
      </Box>
    );
  }
}

export default withRouter(PaletteList);
