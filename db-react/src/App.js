import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/" className="navbar-brand">
              EventRegistration
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/event"} className="nav-link">
                  Event
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/customer"} className="nav-link">
                  Customer
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/organizer"} className="nav-link">
                  Organizer
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/review"} className="nav-link">
                  Review
                </Link>
              </li>
            </div>
          </nav>
        </div>
    )
  }
}

export default App;