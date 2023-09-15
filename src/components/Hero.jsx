import React from 'react'

const Hero = () => {
  return (
    <main className="Hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO
                 HELP YOU WITH OUR SHOES.YOUR FEET DESERVE
                  THE BEST AND WE’RE HERE TO HELP YOU WITH OUR 
                  SHOES.
            </p>
            <div className="hero-btn">
            <button className="shop-btn">SHOP</button>
            <button className="category-btn">Category</button>
            </div>
            <div className="hero-links">
                <p>Also available in</p>
                <img src="/images/amazon.png" alt="" />
                <img src="/images/flipkart.png" alt="" />
            </div>
        </div>
        <div className="hero-image">
            <img src="\images\shoe_image.png" alt="shoe" />
        </div>
    </main>
  )
}

export default Hero
