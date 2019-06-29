/*
    This component is for displaying a button for choosing colour
*/

import React, { Component } from 'react';

class ColourPicker extends Component {

  constructor(props) {
    super(props)
    this.state = {
      backgroundColor: props.colour
    }
  }

  render() {
    return (
      <div className="container-colourpicker" style={this.state}>
      </div>
    )
  }
}

export default ColourPicker;
