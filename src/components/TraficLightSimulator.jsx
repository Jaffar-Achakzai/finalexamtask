import React, { useState, useEffect } from 'react';

const TrafficLightSimulator = () => {
  const [activeLight, setActiveLight] = useState('red');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLight(prev => {
        if (prev === 'red') return 'yellow';
        if (prev === 'yellow') return 'green';
        return 'red';
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Traffic Light Simulator</h2>
      <div style={styles.trafficLight}>
        <div style={{ ...styles.light, ...getLightStyle('red', activeLight) }}></div>
        <div style={{ ...styles.light, ...getLightStyle('yellow', activeLight) }}></div>
        <div style={{ ...styles.light, ...getLightStyle('green', activeLight) }}></div>
      </div>
    </div>
  );
};

const getLightStyle = (color, active) => {
  const isActive = color === active;
  const baseColors = {
    red: '#ff4d4d',
    yellow: '#ffff66',
    green: '#66ff66',
  };
  return {
    backgroundColor: isActive ? baseColors[color] : '#333',
    boxShadow: isActive ? `0 0 30px 10px ${baseColors[color]}` : 'none',
    transition: 'background-color 0.5s, box-shadow 0.5s',
  };
};

// Css code for the Traffic Light Simulator
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#222',
  },
  title: {
    color: '#fff',
    marginBottom: '20px',
  },
  trafficLight: {
    backgroundColor: '#111',
    padding: '20px',
    borderRadius: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
  light: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#333',
  },
};

export default TrafficLightSimulator;



