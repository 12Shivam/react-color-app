import React from 'react';
import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
  },
});

export default function DraggableColorBox(props) {
  const classes = styles();
  return (
    <div className={classes.root} style={{ backgroundColor: props.color }}>
      {props.color}
    </div>
  );
}
