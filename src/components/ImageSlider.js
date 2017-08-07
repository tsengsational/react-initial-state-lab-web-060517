// Bomb Component Code Goes Here
import React from 'react'

class ImageSlider extends React.Component {
  constructor(){
    super();
    this.state = {
      currentSlideIndex: 0
    };
  } // END CONSTRUCTOR

  render(){
    return(
      <p>I am on slide {this.state.currentSlideIndex}</p>
    )
  }; // END RENDER

}

export default ImageSlider
