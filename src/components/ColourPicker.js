/*
    This component is for displaying a button for choosing colour
*/

import React, { Component } from 'react';

class ColourPicker extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentColour: "black",
      backgroundColour: props.colour
    }
    this.changeColour = this.changeColour.bind(this);
  }

  changeColour(e) {
    console.log("Change Colour button is clicked");
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <button className="container-colourpicker"
                onClick={this.changeColour}
                value={this.state.backgroundColour}
                style={{backgroundColor: this.state.backgroundColour}}>
        </button>
      </div>
    )
  }
}

export default ColourPicker;
