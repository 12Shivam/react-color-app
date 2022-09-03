import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  PaletteFooter: {
    border: '1px solid red',
    backgroundColor: 'white',
    height: '5vh',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  emoji: {
    fontSize: '1.5rem',
    margin: '0 1rem',
  },
});

export default useStyles;
