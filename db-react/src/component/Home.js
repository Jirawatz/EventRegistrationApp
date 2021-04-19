import React, { Component } from "react";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';
import img from "../image/SearchVector.jpg"


class Home extends Component {
  render() {
    return (
          <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Header as='h3' style={{ fontSize: '2em' }}>
                    Searching for an Events to Attend?
                  </Header>
                  <p style={{ fontSize: '1.33em' }}>
                    We can help you connect with organizer that organize the events that you are interested in.
                  </p>
                </Grid.Column>
                <Grid.Column floated='right' width={6}>
                  <Image rounded size='large' src={img} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign='left'>
                  <Button
                      basic
                      size='huge'
                      as={Link} to = "/event">Check Them Out</Button>
                  <Button
                      basic color='black'
                      size='huge'>Looking to Schedule an Event?
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <div className="mt-5"></div>
            <Divider/>
          </Segment>

    )
  }
}

export default Home;
