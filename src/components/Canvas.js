/*
    This component is for user to draw on the screen
*/

import React, {Component} from 'react';

class Canvas extends Component {

  constructor(props) {
    super(props);
    this.state = {
      colour: "#000000"
    }
  }

  render() {
    return(
      <div className="container-canvas">

      </div>
    )

  }
}

export default Canvas;
