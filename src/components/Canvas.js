/*
    This component is for user to draw on the screen
*/

import React, {Component} from 'react';

class Canvas extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mousePress: true,
      colour: "#000000",
      lastX: 0,
      lastY: 0,
      totalClick: 0,
      sessionClick: 0
    }
    this.mousedown = this.mousedown.bind(this)
    this.mousemove = this.mousemove.bind(this)
    this.mouseup = this.mouseup.bind(this)
    this.mouseleave = this.mouseleave.bind(this)
    this.draw = this.draw.bind(this)
  }

  mousedown(e) {
    console.log("mousedown");
  }

  mousemove(e) {
    console.log("mousemove");
  }

  mouseup(e) {
    console.log("mouseup");
  }

  mouseleave(e) {
    console.log("mouseleave");
  }

  draw() {

  }

  render() {
    return(
      <div className="container-canvas"
                      onMouseDown={this.mousedown}
                      onMouseMove={this.mousemove}
                      onMouseUp={this.mouseup}
                      onMouseLeave={this.mouseleave}
                      >
      </div>
    )

  }

}

export default Canvas;
