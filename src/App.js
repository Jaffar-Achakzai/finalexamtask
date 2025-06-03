import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';

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

export default TrafficLightSimulator;
