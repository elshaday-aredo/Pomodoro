import React from "react";
import "./App.css";
import Pomodoro from "./pomodoro/Pomodoro";
//import Alarm from "./Alarm";
//import BreakDuration from "./BreakDuration";
//import FocusDuration from "./FocusDuration";

function App() {
  return (
    <div className="App">
      <header className="App-header container">
        <h1>Pomodoro Timer</h1>
      </header>
      <div className="container">
        <Pomodoro />
        {/* <BreakDuration />
        <FocusDuration />
        <Alarm /> */}
      </div>
    </div>
  );
}

export default App;
