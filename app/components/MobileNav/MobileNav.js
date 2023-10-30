"use client";
import Link from "next/link"
import './MobileNav.css';

const MobileNav = () => {
    return (
      <div className="mobile-nav">
      <nav>
        <ul className="mobile-nav__menu">
          <li>
            <a className="mobile-nav__link" href="#about">About</a>
          </li>
          <li>
            <a className="mobile-nav__link" href="#featured">Projects</a>
          </li>
          <li>
            <a className="mobile-nav__link" href="#contact">Contact</a>
          </li>
          <li className="mobile-nav__link-line"></li>
        
          <li>
            <a className="mobile-nav__btn btn" href="https://facebook.com" target="_blank" >Resume</a>
          </li>
        </ul>
      </nav>
    </div>
    );
}

export default MobileNav;