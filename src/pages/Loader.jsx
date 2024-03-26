const styles = {
    ldsRoller: {
      display: 'block',
      position: 'relative',
      width: '80px',
      height: '80px',
      marginLeft: 'auto',
      marginRight: 'auto',
      transform: 'scale(0.8)',
    },
    ldsRollerDiv: {
      animation: 'ldsRoller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
      transformOrigin: '40px 40px',
    },
    ldsRollerDivAfter: {
      content: ' ',
      display: 'block',
      position: 'absolute',
      width: '7px',
      height: '7px',
      borderRadius: '50%',
      background: '#ffe400',
      margin: '-4px 0 0 -4px',
    },
  };
  
  // Apply animation delay styles dynamically
  for (let i = 1; i <= 8; i++) {
    styles[`ldsRollerDiv${i}`] = {
      animationDelay: `-${0.036 * i}s`,
    };
    styles[`ldsRollerDivAfter${i}`] = {
      top: `${63 + 5 * i}px`,
      left: `${63 - 7 * i}px`,
    };
  }
  
  // Define keyframes animation
  const keyframes = {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  };
  
  // Create keyframes animation rule
  const ldsRollerKeyframes = {
    '@keyframes ldsRoller': keyframes,
  };
  
  const Loader = () => {
      return (
          <div style={styles.ldsRoller}>
              {[...Array(8)].map((_, index) => (
                  <div key={index} style={{ ...styles.ldsRollerDiv, ...styles[`ldsRollerDiv${index + 1}`] }}>
                      <div style={{ ...styles.ldsRollerDivAfter, ...styles[`ldsRollerDivAfter${index + 1}`] }}></div>
                  </div>
              ))}
          </div>
      );
  };
  
  export default Loader;
  