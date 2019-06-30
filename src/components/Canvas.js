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
    this.canvas = this.canvas.bind(this);
    this.ctx = this.ctx.bind(this);
  }

  componentDidMount() {
    this.canvas().width = window.innerWidth;
    this.canvas().height = window.innerHeight;
  }

  canvas() {
    return document.querySelector("#container-canvas");
  }

  ctx() {
    return this.canvas().getContext("2d");
  }

  mousedown(e) {
    this.setState({mousePressed: true });
    this.draw(e.pageX-this.canvas().offsetLeft, e.pageY-this.canvas().offsetTop, false, this.state.colour);
  }

  mousemove(e) {
    if (this.state.mousePressed) {
      this.draw(e.pageX - this.canvas().offsetLeft, e.pageY - this.canvas().offsetTop, true, this.state.colour);
    }
  }

  mouseup(e) {
    this.setState({mousePressed: false });
  }

  mouseleave(e) {
    this.setState({mousePressed: false });
  }

  draw(x, y, isDown, colour) {
    if (isDown) {
        this.ctx().beginPath();
        this.ctx().strokeStyle = colour;
        this.ctx().lineWidth = 1;
        this.ctx().moveTo(this.state.lastX, this.state.lastY);
        this.ctx().lineTo(x, y);
        this.ctx().closePath();
        this.ctx().stroke();
    }
    this.setState({
        lastX: x,
        lastY: y
    })
  }

  render() {
    return(
      <div className="">
        <canvas id="container-canvas" ref="canvas"
          onMouseDown={this.mousedown}
          onMouseMove={this.mousemove}
          onMouseUp={this.mouseup}
          onMouseLeave={this.mouseleave} />
      </div>
    )
  }

}

export default Canvas;
