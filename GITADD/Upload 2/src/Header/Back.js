import React from "react";

import { Link } from "react-router-dom";

import "./Back.css";

import video from "./background_video.mp4";

export default function Background() {
  return (
    <>
      <div className="hero-container">
        <video src={video} autoPlay loop muted />
        <h1>Welcome to my music</h1>
        <h2>What are you waiting for?</h2>
        <a href="/Artist">
          <button>
            Click!! {"  "}
            <i className="fas fa-headphones-alt"></i>
          </button>
        </a>
      </div>
    </>
  );
}
