import React, { Component } from 'react';
import { withRouter } from './withRouter';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import withStyles from 'react-jss';
import styles from './styles/PaletteListStyles';

class PaletteList extends Component {
  goToPalette(id) {
    this.props.navigate(`/palette/${id}`);
  }
  render() {
    const { palettes, deletePalette, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
            <Link to='/palette/new'>Create Palette</Link>
          </nav>
          <div className={classes.palettes}>
            {palettes.map(palette => (
              <MiniPalette
                {...palette}
                key={palette.id}
                id={palette.id}
                handleClick={() => this.goToPalette(palette.id)}
                handleDelete={deletePalette}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(PaletteList));
