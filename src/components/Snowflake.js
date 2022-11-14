import React from "react";

const MAX_OPACITY = 1;
const MIN_OPACITY = 0.5;
const MAX_DIAMETER = 40;
const MIN_DIAMETER = 10;
const MIN_Y_VELOCITY = 0.3;
const STORM_BORDER_WIDTH = 80;
const FRAMERATE = 60.0;
const FRAME_TIME = (1.0 / FRAMERATE) * 100.0;

class Snowflake extends React.Component {
  constructor() {
    super();
    this.opacity = Math.random() * (MAX_OPACITY - MIN_OPACITY) + MIN_OPACITY;
    this.diameter =
      Math.random() * (MAX_DIAMETER - MIN_DIAMETER) + MIN_DIAMETER;
    this.state = {
      position: [
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight,
      ],
      velocity: [Math.random() * 2 - 1, Math.random() + MIN_Y_VELOCITY],
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        position: [
          this.state.position[0] + this.state.velocity[0],
          this.state.position[1] + this.state.velocity[1],
        ],
        velocity: this.state.velocity,
      });
    }, FRAME_TIME);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    if (this.state.position[0] > window.innerWidth - STORM_BORDER_WIDTH)
      this.state.position[0] = -STORM_BORDER_WIDTH;
    if (this.state.position[1] > window.innerHeight - STORM_BORDER_WIDTH)
      this.state.position[1] = -STORM_BORDER_WIDTH;
    if (this.state.position[0] < -STORM_BORDER_WIDTH)
      this.state.position[0] = window.innerWidth - STORM_BORDER_WIDTH;
    if (this.state.position[1] < -STORM_BORDER_WIDTH)
      this.state.position[1] = window.innerHeight - STORM_BORDER_WIDTH;
    const myStyle = {
      position: "absolute",
      left: this.state.position[0],
      top: this.state.position[1],
      height: this.diameter,
      width: this.diameter,
      "background-color": "white",
      borderRadius: "50%",
      opacity: this.opacity,
    };
    return <div style={myStyle}></div>;
  }
}

export default Snowflake;
