import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  PaletteFooter: {
    backgroundColor: '#eceff1',
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
