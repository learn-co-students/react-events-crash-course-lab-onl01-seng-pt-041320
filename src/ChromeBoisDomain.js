import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    const x = event.clientX
    const y = event.clientY
    drawChromeBoiAtCoords(x, y);
  }
  
  handleOnClick = (event) => {
    toggleCycling()
  }
   
  handleKeyDown = (event) => {
    if (event.key === 'a') {
      resize('+')
    } else if (event.which === 83) {
      resize('-')
    }
  }
  
  render() {
    return (
      <canvas 
        onClick={this.handleOnClick}
        onMouseMove={this.handleMouseMove}
        onKeyDown={this.handleKeyDown}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
