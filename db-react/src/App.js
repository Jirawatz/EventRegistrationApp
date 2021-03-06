import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Grid } from 'semantic-ui-react';
import EventsList from './component/EventsList';
import Home from './component/Home';
import EventUpdater from './component/EventEditor';
import CustomerUpdate from './component/CustomerEditor';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EventCreator from "./component/EventCreator";
import CustomerList from "./component/CustomerList";
import CustomerCreator from "./component/CustomerCreator";
import OrganizerList from "./component/OrganizerList";
import OrganizerUpdate from "./component/OrganizerEditor";
import OrganizerCreator from "./component/OrganizerCreator";
import ReviewList from "./component/ReviewList";
import ReviewEditor from "./component/ReviewEditor";
import RegisterPage from "./component/RegisterPage";
import HostPage from "./component/HostPage";
import RegisterEditor from "./component/RegisterEditor";
import HostEditor from "./component/HostEditor";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
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
            </div>
          </nav>

          <Grid container style={{ padding: '5em 0em' }}>
            <Grid.Row>
              <Grid.Column>
                <Switch>
                  <Route exact path="/">
                    <Home/>
                  </Route>
                  <Route exact path="/event"
                          render={(props) => <EventsList {...props}/>}/>
                  <Route exact path="/customer"
                         render={(props) => <CustomerList {...props}/>}/>
                  <Route exact path="/organizer"
                         render={(props) => <OrganizerList {...props}/>}/>
                  <Route
                      path="/event/find/:id/:regid?/:orgid?"
                      render={(props) => <EventUpdater {...props}/>}/>
                  <Route
                      path="/customer/find/:id"
                      render={(props) => <CustomerUpdate {...props}/>}/>
                  <Route
                      path="/organizer/find/:id"
                      render={(props) => <OrganizerUpdate {...props}/>}/>
                  <Route
                      path="/review/event/:id/:cid?"
                      render={(props) => <ReviewList {...props}/>}/>
                  <Route
                      path="/review/:id/event/:eventid/customer/:custid"
                      render={(props) => <ReviewEditor {...props}/>}/>
                  <Route
                      path="/event/create"
                      render={(props) => <EventCreator {...props}/>}/>
                  <Route
                      path="/customer/create"
                      render={(props) => <CustomerCreator {...props}/>}/>
                  <Route
                      path="/organizer/create"
                      render={(props) => <OrganizerCreator {...props}/>}/>
                  <Route
                      path="/customer/:id/register"
                      render={(props) => <RegisterPage{...props}/>}/>
                  <Route
                      path="/register/:regid/event/:eid/customer/:cid"
                      render={(props) => <RegisterEditor{...props}/>}/>
                  <Route
                      path="/event/host/:id"
                      render={(props) => <HostPage{...props}/>}/>
                  <Route
                      path="/host/:hid/event/:eid/organizer/:oid"
                      render={(props) => <HostEditor{...props}/>}/>
                  />
                </Switch>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        </BrowserRouter>

    )
  }
}

export default App;