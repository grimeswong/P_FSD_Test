/*
    This component is for user to draw on the screen
*/

import React, {Component} from 'react';

class Canvas extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mousePressed: false,
      colour: "#000000",
      lastX: 0,
      lastY: 0,
      totalClick: 0,
      sessionClick: 0
    }
    this.mousedown = this.mousedown.bind(this);
    this.mousemove = this.mousemove.bind(this);
    this.mouseup = this.mouseup.bind(this);
    this.mouseleave = this.mouseleave.bind(this);
    this.draw = this.draw.bind(this);
  }

  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
  }

  canvas() {
    return document.querySelector("canvas");
  }

  ctx() {
    return this.canvas().getContext("2d");
  }

  mousedown(e) {
    console.log("mousedown");
    this.setState({mousePressed: true });
    console.log("e.pageX = " + e.pageX + ", canvas.offsetLeft =" + this.canvas().offsetLeft);
    console.log("e.pageY = " + e.pageY + ", canvas.offsetTop =" + this.canvas().offsetTop);
  }

  mousemove(e) {
    console.log("mousemove");
  }

  mouseup(e) {
    console.log("mouseup");
    this.setState({mousePressed: false });
  }

  mouseleave(e) {
    console.log("mouseleave");
  }

  draw() {

  }

  render() {
    return(
      <div>
        <canvas ref="canvas"
          onMouseDown={this.mousedown}
          onMouseMove={this.mousemove}
          onMouseUp={this.mouseup}
          onMouseLeave={this.mouseleave} />
      </div>
    )

  }

}

export default Canvas;
