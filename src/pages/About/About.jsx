import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";
import missionImg from "../../images/mission.jpg";
import visionImg from "../../images/vision.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About Us</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src={aboutImg} alt="About BookHub" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Welcome to BookHub, your ultimate destination for discovering and exploring a vast collection of books. Our mission is to connect book lovers with their next great read, providing detailed information and reviews to help you make informed choices.</p>
            <p className='fs-17'>At BookHub, we believe in the power of books to inspire, educate, and entertain. Whether you're looking for the latest bestsellers, timeless classics, or hidden gems, our platform is designed to cater to all your reading needs. Join our community of avid readers and embark on a literary journey like no other.</p>
            <a href="https://openlibrary.org" target="_blank" rel="noopener noreferrer" className='open-library-link'>Visit Open Library</a>
          </div>
        </div>

        <div className='about-mission-vision grid'>
          <div className='mission'>
            <img src={missionImg} alt="Our Mission" />
            <h3 className='fs-22'>Our Mission</h3>
            <p className='fs-17'>To cultivate a passion for reading by providing easy access to a diverse range of books and resources. We aim to inspire, educate, and entertain readers of all ages and backgrounds.</p>
          </div>
          <div className='vision'>
            <img src={visionImg} alt="Our Vision" />
            <h3 className='fs-22'>Our Vision</h3>
            <p className='fs-17'>To be the leading platform for book discovery and literary engagement, connecting readers worldwide and fostering a global community of book enthusiasts.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
