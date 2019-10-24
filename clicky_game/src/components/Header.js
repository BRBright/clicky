import React from "react";

function Header(props) {
  return (
    <div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" href="/">
            Clicky Game!
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Click image to begain!</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Score: {props.score}</a>
        </li>
      </ul>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Clicky Game!</h1>
          <h2 className="lead">
            Click on an image to earn points, but don't click on any more than
            once!
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
