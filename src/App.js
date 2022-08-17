import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedColors from './seedColors';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path='/'>
          <Route index={true} element={<PaletteList palettes={seedColors} />} />
          <Route
            path='palette/:id'
            element={<Palette palettes={seedColors} />}
          />
        </Route>
        <Route path='*' element={<Navigate to='/' replace={true} />} />
      </Routes>
    );
  }
}

export default App;
