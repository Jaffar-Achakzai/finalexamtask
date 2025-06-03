import { useEffect } from "react";

const TrafficLightSimulator = () => {
  return (
    <div>
      <h2>Traffic Light Simulator</h2>
      <div>
        <div style={getLightStyle("red", activeLight)}></div>
        <div style={getLightStyle("yellow", activeLight)}></div>
        <div style={getLightStyle("green", activeLight)}></div>
      </div>
    </div>
  );
};



export default TrafficLightSimulator;
