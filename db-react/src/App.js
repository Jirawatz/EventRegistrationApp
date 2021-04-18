import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import {
  Button,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  Label,
  Menu,
  Message,
  Segment,
  Table,
} from 'semantic-ui-react'
import EventsList from './component/EventsList'

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

          <Grid container style={{ padding: '5em 0em' }}>
            <Grid.Row>
              <Grid.Column>
                <Header as='h1' dividing>
                  Finding List of Events
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <EventsList />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    )
  }
}

export default App;