import React from 'react';
import './App.scss';
import ColourPicker from './components/ColourPicker';
import Canvas from './components/Canvas';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      colour:"black"
    })

  }

  changePenColour = (colour) => {
    this.setState({
      colour: colour
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container-topbar">
          <div className="colourpicker-wrapper">
            <ColourPicker changePenColour={this.changePenColour} colour="black"/>
            <ColourPicker changePenColour={this.changePenColour} colour="blue"/>
            <ColourPicker changePenColour={this.changePenColour} colour="red"/>
            <ColourPicker changePenColour={this.changePenColour} colour="yellow"/>
          </div>
        </div>
        <Canvas colour={this.state.colour} />
      </div>
    );
  }
}
