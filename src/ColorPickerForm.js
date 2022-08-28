import React, { Component } from 'react';
import Button from '@mui/material/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: 'teal',
      newColorName: '',
    };
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', value =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule('isColorUnique', value =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }
  updateCurrentColor(newColor) {
    let alpha = ((newColor.rgb.a * 255) | (1 << 8)).toString(16).slice(1);
    let hexa = `${newColor.hex}${alpha}`.toUpperCase();
    this.setState({ currentColor: hexa });
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName,
    };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: '' });
  }
  render() {
    const { paletteIsFull } = this.props;
    const { currentColor, newColorName } = this.state;
    return (
      <div>
        <ChromePicker color={currentColor} onChange={this.updateCurrentColor} />
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            style={{ display: 'inline' }}
            value={newColorName}
            name='newColorName'
            onChange={this.handleChange}
            validators={['required', 'isColorNameUnique', 'isColorUnique']}
            errorMessages={[
              'Enter a color name',
              'Color name must be unique',
              'Color already used',
            ]}
            variant='filled'
          />
          <Button
            variant='contained'
            type='submit'
            disabled={paletteIsFull}
            sx={{
              backgroundColor: currentColor,
              ':hover': { backgroundColor: currentColor },
            }}
          >
            {paletteIsFull ? 'Palette Full' : 'Add Colors'}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default ColorPickerForm;
