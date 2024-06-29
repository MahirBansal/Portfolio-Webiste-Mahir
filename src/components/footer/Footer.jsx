import React from 'react';
import "./footer.css";

export const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer__container">
          <h1 className="footer__title">Mahir</h1>

          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">
                Projects
              </a>
            </li>
          </ul>

          <div className="footer__social">
            <a
              href="https://www.instagram.com/mahir_bansal/"
              className="footer__social-link"
              target="_blank"
            >
              <i class="bx bxl-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/"
              className="footer__social-link"
              target="_blank"
            >
              <i class="bx bxl-facebook"></i>
            </a>
            <a
              href="https://x.com/VeNoM72439528"
              className="footer__social-link"
              target="_blank"
            >
              <i class="bx bxl-twitter"></i>
            </a>
          </div>
          <span className="footer__copy">
            &#169; Mahir Bansal, All rights reserved
          </span>
        </div>
      </footer>
    );
};
