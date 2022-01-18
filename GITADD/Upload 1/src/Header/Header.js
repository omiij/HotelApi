import React, { Component } from "react";
import "./Header.css";

export const MenuItems = [
  {
    title: "Home",
    url: "/",
    cName: "nav-links",
  },
  {
    title: "Music",
    url: "/Artist",
    cName: "nav-links",
  },
  {
    title: "Products",
    url: "/",
    cName: "nav-links",
  },
  {
    title: "Contact Us",
    url: "/",
    cName: "nav-links",
  },
  {
    title: "Sign Up",
    url: "/SignUp",
    cName: "nav-links-signup",
  },
];

class Header extends Component {
  render() {
    return (
      <div className="container">
        <nav className="NavbarItem">
          <h1 className="Logo">
            <strong>Omii</strong>
            <i className="fas fa-music" />
          </h1>

          <div>
            <ul className="nav-menu">
              {MenuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={item.url} className={item.cName}>
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
