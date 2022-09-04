import React, { Component } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 'form',
      newPaletteName: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.showEmojiPicker = this.showEmojiPicker.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }
  componentDidMount() {
    ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  showEmojiPicker() {
    this.setState({ stage: 'emoji' });
  }
  savePalette(emoji) {
    const newPalette = {
      paletteName: this.state.newPaletteName,
      emoji: emoji.native,
    };
    this.props.handleSubmit(newPalette);
    this.setState({ stage: '' });
  }
  render() {
    const { stage, newPaletteName } = this.state;
    const { hideForm } = this.props;
    return (
      <div>
        <Dialog open={stage === 'emoji'} onClose={hideForm}>
          <DialogTitle>Choose a Palette Emoji</DialogTitle>
          <Picker
            data={data}
            theme='light'
            icons='solid'
            onEmojiSelect={this.savePalette}
          />
        </Dialog>
        <Dialog open={stage === 'form'} onClose={hideForm}>
          <DialogTitle>Choose a Palette Name</DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                Please enter a name for your new beautiful palette. Make sure
                it's unique!
              </DialogContentText>

              <TextValidator
                label='Palette Name'
                value={newPaletteName}
                name='newPaletteName'
                onChange={this.handleChange}
                fullWidth
                margin='normal'
                validators={['required', 'isPaletteNameUnique']}
                errorMessages={['Enter a color name', 'Name already used']}
                variant='standard'
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={hideForm}>Cancel</Button>
              <Button variant='contained' color='primary' type='submit'>
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteMetaForm;
