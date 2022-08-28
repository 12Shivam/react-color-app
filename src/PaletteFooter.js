import React from 'react';
import useStyles from './styles/PaletteFooterStyles';

export default function PaletteFooter(props) {
  const { emoji, paletteName } = props;
  const classes = useStyles();
  return (
    <footer className={classes.PaletteFooter}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
}
