import React, { Component } from 'react';
import ColorBox from './ColorBox';
import { withRouter } from './withRouter';
import { generatePalette } from './colorHelper';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._palette = generatePalette(
      this.findPalette(this.props.params.paletteId)
    );
    this._shades = this.gatherShades(this._palette, this.props.params.colorId);
  }

  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }
    return shades.splice(1);
  }

  findPalette(id) {
    return this.props.palettes.find(p => p.id === id);
  }

  render() {
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.name.replace(/ /g, '-')}
        name={color.name}
        background={color.hex}
        showLink={false}
      />
    ));
    return (
      <div className='Palette'>
        <h1>SingleColorPalette</h1>
        <div className='Palette-colors'>{colorBoxes}</div>
      </div>
    );
  }
}

export default withRouter(SingleColorPalette);
