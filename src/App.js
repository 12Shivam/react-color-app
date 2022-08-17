import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Palette from './Palette';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path='/'>
          <Route index={true} />
          <Route path='palette/:id' element={<Palette />} />
        </Route>
        <Route path='*' element={<Navigate to='/' replace={true} />} />
      </Routes>
    );
  }
}

export default App;
