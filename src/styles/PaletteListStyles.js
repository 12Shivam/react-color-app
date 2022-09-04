import sizes from './sizes';
import bg from './bg.svg';

const styles = {
  '@global': {
    '.fade-exit': {
      opacity: 1,
    },
    '.fade-exit-active': {
      opacity: 0,
      transition: 'opacity 500ms ease-out',
    },
  },
  root: {
    /* background by SVGBackgrounds.com */
    backgroundColor: '#350EAA',
    backgroundImage: `url(${bg})`,
    height: '100vh',
    display: 'flex',
    paddingBottom: '10rem',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflowX: 'hidden',
    overflowY: 'auto',
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset O O 6px rgba(0,0,0,0.3)',
      backgroundColor: '#350EAA',
      borderRadius: '10px',
    },
    '&::-webkit-scrollbar': {
      width: '15px',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '15px',
      backgroundColor: '#000000',
      backgroundImage:
        '-webkit-gradient(linear,left bottom,left top,color-stop(0.44, rgb(122,153,217)),color-stop(0.72,rgb(73,125,189)),color-stop(0.86, rgb(28,58,148)))',
    },
  },
  heading: {
    fontSize: '2rem',
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    [sizes.down('xl')]: {
      width: '80%',
    },
    [sizes.down('xs')]: {
      width: '75%',
    },
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    '& a': {
      color: 'white',
      textUnderlineOffset: '6px',
    },
    filter: 'drop-shadow(2.5px 2.5px 9px #0ebfff)',
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '2.5rem',
    [sizes.down('md')]: {
      gridTemplateColumns: 'repeat(2, 50%)',
    },
    [sizes.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 100%)',
      gridGap: '1.4rem',
    },
  },
};

export default styles;
