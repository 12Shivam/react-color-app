import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import chroma from 'chroma-js';
import './ColorBox.css';

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1000);
    });
  }

  render() {
    const { paletteId, id, name, background, showingFullPalette } = this.props;
    const { copied } = this.state;
    const styleSX = {
      colorBox: {
        width: '20%',
        height: showingFullPalette ? '25%' : '50%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-4px',
        ':hover button': {
          opacity: 1,
        },
      },
      copyText: {
        color: chroma(background).luminance() >= 0.7 ? 'black' : 'white',
      },
      colorName: {
        color: chroma(background).luminance() <= 0.08 ? 'white' : 'black',
      },
      seeMore: {
        color:
          chroma(background).luminance() >= 0.7 ? 'rgba(0,0,0,0.6)' : 'white',
        background: 'rgba(255, 255, 255, 0.3)',
        position: 'absolute',
        border: 'none',
        right: '0px',
        bottom: '0px',
        width: '60px',
        height: '30px',
        textAlign: 'center',
        lineHeight: '30px',
        textTransform: 'uppercase',
      },
      copyButton: {
        color:
          chroma(background).luminance() >= 0.7 ? 'rgba(0,0,0,0.6)' : 'white',
        width: '100px',
        height: '30px',
        position: 'absolute',
        display: 'inline-block',
        top: '50%',
        left: '50%',
        marginLeft: '-50px',
        marginTop: '-15px',
        textAlign: 'center',
        outline: 'none',
        background: 'rgba(255, 255, 255, 0.3)',
        fontSize: '1rem',
        lineHeight: '30px',
        textTransform: 'uppercase',
        border: 'none',
        textDecoration: 'none',
        opacity: 0,
      },
    };

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <Box style={{ background }} sx={styleSX.colorBox}>
          <div
            style={{ background }}
            className={`copy-overlay ${copied && 'show'}`}
          />
          <div className={`copy-msg ${copied && 'show'}`}>
            <h1>copied!</h1>
            <Box component='p' sx={styleSX.copyText}>
              {background}
            </Box>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
              <Box component='span' sx={styleSX.colorName}>
                {name}
              </Box>
            </div>
            <Box component='button' sx={styleSX.copyButton}>
              Copy
            </Box>
          </div>
          {showingFullPalette && (
            <Link
              to={`/palette/${paletteId}/${id}`}
              onClick={e => e.stopPropagation()}
            >
              <Box component='span' sx={styleSX.seeMore}>
                MORE
              </Box>
            </Link>
          )}
        </Box>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
