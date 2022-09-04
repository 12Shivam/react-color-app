import React from 'react';
import withStyles from 'react-jss';
import { SortableElement } from 'react-sortable-hoc';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './styles/DraggableColorBoxStyles';

const DraggableColorBox = SortableElement(props => {
  const { name, color, handleClick, classes } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      ㅤ
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
      </div>
    </div>
  );
});

export default withStyles(styles)(DraggableColorBox);
