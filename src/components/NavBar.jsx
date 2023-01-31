import React from "react";

function NavBar() {
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");
  // /*===== MENU SHOW =====*/
  // /* Validate if constant exists */
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }

  // /*===== MENU HIDDEN =====*/
  // /* Validate if constant exists */
  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <svg
          width="20"
          height="22"
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 15V6.99999C18.9996 6.64927 18.9071 6.3048 18.7315 6.00116C18.556 5.69751 18.3037 5.44536 18 5.26999L11 1.26999C10.696 1.09446 10.3511 1.00204 10 1.00204C9.64893 1.00204 9.30404 1.09446 9 1.26999L2 5.26999C1.69626 5.44536 1.44398 5.69751 1.26846 6.00116C1.09294 6.3048 1.00036 6.64927 1 6.99999V15C1.00036 15.3507 1.09294 15.6952 1.26846 15.9988C1.44398 16.3025 1.69626 16.5546 2 16.73L9 20.73C9.30404 20.9055 9.64893 20.9979 10 20.9979C10.3511 20.9979 10.696 20.9055 11 20.73L18 16.73C18.3037 16.5546 18.556 16.3025 18.7315 15.9988C18.9071 15.6952 18.9996 15.3507 19 15Z"
            stroke="#F5CB5C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="uil uil-estate nav__icon"></i> LINK
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> LINK
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> LINK
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i> LINK
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> LINK
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link button button--flex">
                <i className="uil uil-message nav__icon"></i> BUTTOM
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav__close" id="nav-close"></i>
        </div>

        <div className="nav__btns">
          {/* Theme Change Button */}
          <i className="uil uil-moon change-theme" id="theme-button"></i>

          <div className="nav__toggle" id="nav-toggle">
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
