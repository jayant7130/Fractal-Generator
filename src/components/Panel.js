import React from 'react';

function Panel({ onStart }) {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the Fractal World</h1>
      <p style={styles.text}>
        Explore the fascinating world of fractals, where mathematics and art collide. Fractals are self-similar, infinitely complex patterns that are a visual representation of mathematical formulas.
      </p>
      <button style={styles.button} onClick={onStart}>Get Started</button>
    </div>
  );
}

const styles = {
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    color: 'white',
    maxWidth: '400px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  text: {
    fontSize: '16px',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Panel;
