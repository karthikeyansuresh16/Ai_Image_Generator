import React from 'react'
import './ImageGenerator.css'
import default_image from'../Assets/Ai.jpg'

const ImageGenerator = () => {
  return (
    <div className="image-generator">
      <div className="Head">Ai image<span> Generator</span></div>
      <div className="img-loading"></div>
      <div className="image"><img src={default_image} alt="AI Generated" />
    </div>
    <div className="search-box">
      <input type="text" className="search-input" placeholder="Describe what you want to see" />
      <div className="generate-btn">Generate</div>
    </div>
    </div>
  )
}

export default ImageGenerator
