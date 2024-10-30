// src/components/Landing.js
import React from 'react'
import { Link } from 'react-router-dom'
import './landing.css' // Optional: For styling if you want to add custom styles

const Landing = () => {
  return (
    <div className="landing">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Our App!</h1>
        <p>Your journey to something amazing starts here.</p>
        <Link to="/about">
          <button className="cta-button">Learn More</button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <h2>Feature One</h2>
          <p>
            Discover how our app can help you achieve more with less effort.
          </p>
        </div>
        <div className="feature">
          <h2>Feature Two</h2>
          <p>Connect with others and share your achievements seamlessly.</p>
        </div>
        <div className="feature">
          <h2>Feature Three</h2>
          <p>Enjoy a range of tools designed to make life easier.</p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <Link to="/signup">
          <button className="cta-button">Join Now</button>
        </Link>
      </section>
    </div>
  )
}

export default Landing
