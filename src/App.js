import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelper';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path='/'>
          <Route index={true} />
          <Route path='palette/:id' />
        </Route>
        <Route path='*' element={<Navigate to='/' replace={true} />} />
      </Routes>
    );
    //   <div className='App'>
    //     <Palette palette={generatePalette(seedColors[4])} />
    //   </div>;
  }
}

export default App;
