import React from 'react'
import './ImageGenerator.css'
import default_image from'../Assets/Ai.jpg'

const ImageGenerator = () => {
  return (
    <div className="image-generator">
      <div className="Head">Ai image<span>Generator</span></div>
      <div className="img-loading"></div>
      <div className="image"><img src={default_image} alt="AI Generated" /></div>
    </div>
  )
}

export default ImageGenerator
