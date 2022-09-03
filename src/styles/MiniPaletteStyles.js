const styles = {
  root: {
    backgroundColor: 'white',
    border: '0.5px solid #dae1e4',
    borderRadius: '5px',
    padding: '0.1rem',
    position: 'relative',
    cursor: 'pointer',
    '&:hover svg': {
      opacity: 1,
    },
  },
  colors: {
    backgroundColor: '#dae1e4',
    height: '150px',
    width: '100%',
    border: '0.5px solid #dae1e4',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    padding: '0.2rem',
    fontSize: '1rem',
    position: 'relative',
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1.3rem',
  },
  miniColor: {
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0',
    position: 'relative',
  },
  deleteIcon: {
    color: 'white',
    backgroundColor: '#eb3d30',
    width: '30px',
    height: '30px',
    position: 'absolute',
    right: '2px',
    top: '2px',
    borderRadius: '5px',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    zIndex: 10,
    opacity: 0,
  },
};

export default styles;
