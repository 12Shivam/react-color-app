import React, { Component } from 'react';
import { withRouter } from './withRouter';
import { Routes, Route, Navigate } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import seedColors from './seedColors';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
    this.state = {
      palettes: savedPalettes || seedColors,
    };
    this.savePalette = this.savePalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }
  deletePalette(id) {
    this.setState(
      st => ({ palettes: st.palettes.filter(palette => palette.id !== id) }),
      this.syncLocalStorage
    );
  }
  savePalette(newPalette) {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  }
  syncLocalStorage() {
    // save palettes to local storage
    window.localStorage.setItem(
      'palettes',
      JSON.stringify(this.state.palettes)
    );
  }
  render() {
    const { palettes } = this.state;
    const { location } = this.props;
    return (
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames='fade' timeout={500}>
          <Routes location={location}>
            <Route
              path='/'
              element={
                <div className='page'>
                  <PaletteList
                    palettes={palettes}
                    deletePalette={this.deletePalette}
                  />
                </div>
              }
            />
            <Route
              path='/palette/new'
              element={
                <div className='page'>
                  <NewPaletteForm
                    savePalette={this.savePalette}
                    palettes={palettes}
                  />
                </div>
              }
            />
            <Route
              path='/palette/:id'
              element={
                <div className='page'>
                  <Palette palettes={palettes} />
                </div>
              }
            />
            <Route
              path='/palette/:paletteId/:colorId'
              element={
                <div className='page'>
                  <SingleColorPalette palettes={palettes} />
                </div>
              }
            />
            <Route path='*' element={<Navigate to='/' replace={true} />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default withRouter(App);
