import React from 'react';
import './App.scss';
import ColourPicker from './components/ColourPicker';
import Canvas from './components/Canvas';

function App() {
  return (
    <div className="App">
      <div className="container-topbar">
        <div className="colourpicker-wrapper">
          <ColourPicker colour="black"/>
          <ColourPicker colour="blue"/>
          <ColourPicker colour="red"/>
          <ColourPicker colour="yellow"/>
        </div>
      </div>
      <Canvas />
    </div>
  );
}

export default App;
