import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Discover Your Next Great Read</h2><br />
                <p className='header-text fs-18 fw-3'>Explore our extensive collection of books across various genres. Find your favorite titles and discover new ones to add to your reading list.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header