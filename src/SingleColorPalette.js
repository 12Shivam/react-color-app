import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { withRouter } from './withRouter';
import { generatePalette } from './colorHelper';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._palette = generatePalette(
      this.findPalette(this.props.params.paletteId)
    );
    this._shades = this.gatherShades(this._palette, this.props.params.colorId);
    this.state = { format: 'hex' };
    this.changeFormat = this.changeFormat.bind(this);
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

  changeFormat(val) {
    this.setState({ format: val });
  }

  render() {
    const { format } = this.state;
    const { id, paletteName, emoji } = this._palette;
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.name.replace(/ /g, '-')}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));
    return (
      <div className='SingleColorPalette Palette'>
        <Navbar handleChange={this.changeFormat} showingAllColors={false} />
        <div className='Palette-colors'>
          {colorBoxes}
          <div className='go-back ColorBox'>
            <Link to={`/palette/${id}`} className='back-button'>
              GO BACK
            </Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withRouter(SingleColorPalette);
