import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import seedColors from './seedColors';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: seedColors,
    };
    this.savePalette = this.savePalette.bind(this);
  }
  savePalette(newPalette) {
    this.setState({ palettes: [...this.state.palettes, newPalette] });
  }
  render() {
    const { palettes } = this.state;
    return (
      <Routes>
        <Route path='/'>
          <Route index={true} element={<PaletteList palettes={palettes} />} />
          <Route
            path='palette/new'
            element={<NewPaletteForm savePalette={this.savePalette} />}
          />
          <Route path='palette/:id' element={<Palette palettes={palettes} />} />
          <Route
            path='palette/:paletteId/:colorId'
            element={<SingleColorPalette palettes={palettes} />}
          />
        </Route>
        <Route path='*' element={<Navigate to='/' replace={true} />} />
      </Routes>
    );
  }
}

export default App;
