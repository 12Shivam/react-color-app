const styles = {
  root: {
    backgroundColor: 'blue',
    height: '100vh',
    display: 'flex',
    border: '1px solid red',
    paddingBottom: '10rem',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflowX: 'hidden',
    overflowY: 'auto',
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset O O 6px rgba(0,0,0,0.3)',
      backgroundColor: '#0202c9',
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
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
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
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%',
  },
};

export default styles;
