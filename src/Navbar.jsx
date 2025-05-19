import './Navbar.css'
import { Link } from "@chakra-ui/react"
import React, { useState, useEffect } from 'react';

function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} >
      <a href="#landing">
        <h1>m0skwa</h1>
      </a>
      <ul className="list-items">
        <li><Link className="item" href="#about">About</Link></li>
        <li><Link className="item" href="#skills">Skills</Link></li>
        <li><Link className="item" href="#projects">Projects</Link></li>
      </ul>
    </header>
  )
}

export default Navbar
