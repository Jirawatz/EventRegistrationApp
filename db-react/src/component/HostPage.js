import React, {Component} from "react";
import OrganizerService from "../service/OrganizerService";
import {Button, Card, Form, Grid, Header} from 'semantic-ui-react';
import {Link} from "react-router-dom";
import EventsService from "../service/EventsService";
import HostService from "../service/HostService";

class HostPage extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeDOB = this.onChangeDOB.bind(this);
    this.onChangeCompany = this.onChangeCompany.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.saveOrganizer = this.saveOrganizer.bind(this);
    this.saveHost = this.saveHost.bind(this);
    this.getHost = this.getHost.bind(this);
    this.getOrganizer = this.getOrganizer.bind(this);
    this.getEvent = this.getEvent.bind(this);
    this.retrieveAllEvent = this.retrieveAllEvent.bind(this);
    this.retrieveAllOrganizer = this.retrieveAllOrganizer.bind(this);

    this.state = {
      organizers: [],
      currentOrganizer: {
        id: null,
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        email: "",
        dateOfBirth: "",
        company: "",
        phone: ""
      },
      currentEvent: {
        eventid: null,
        name: "",
        type: "",
        startdate: "",
        enddate: "",
        description: "",
        fee: ""
      },
      event: [],
      updated: false
    };
  }

  componentDidMount() {
    //console.log(this.props.match.params.id);
    this.getOrganizer(this.props.match.params.id);
    this.retrieveAllEvent();
    this.retrieveAllOrganizer();
  }

  onChangeFirstName(e) {
    const firstname = e.target.value;

    this.setState(function (prevState) {
      return {
        currentOrganizer: {
          ...prevState.currentOrganizer,
          firstName: firstname
        }
      };
    });
  }

  nChangePassword(e) {
    const password = e.target.value;

    this.setState(function (prevState) {
      return {
        currentOrganizer: {
          ...prevState.currentOrganizer,
          password: password
        }
      };
    });
  }

  onChangeEmail(e) {
    const email = e.target.value;

    this.setState(function (prevState) {
      return {
        currentOrganizer: {
          ...prevState.currentOrganizer,
          email: email,
          username: email
        }
      };
    });
  }

  onChangeDOB(e) {
    const dob = e.target.value;

    console.log(dob);

    this.setState(function (prevState) {
      return {
        currentOrganizer: {
          ...prevState.currentOrganizer,
          dateOfBirth: dob
        }
      };
    });
  }

  onChangeCompany(e) {
    const company = e.target.value;

    this.setState(function (prevState) {
      return {
        currentOrganizer: {
          ...prevState.currentOrganizer,
          company: company
        }
      };
    });
  }

  onChangePhone(e) {
    const phone = e.target.value;

    this.setState(function (prevState) {
      return {
        currentOrganizer: {
          ...prevState.currentOrganizer,
          phone: phone
        }
      };
    });
  }

  saveOrganizer() {
    var updatedOrganizer = {
      id: this.state.currentOrganizer.id,
      firstName: this.state.currentOrganizer.firstName,
      lastName: this.state.currentOrganizer.lastName,
      username: this.state.currentOrganizer.username,
      password: this.state.currentOrganizer.password,
      email: this.state.currentOrganizer.email,
      dateOfBirth: this.state.currentOrganizer.dateOfBirth,
      company: this.state.currentOrganizer.company,
      phone: this.state.currentOrganizer.phone
    }

    OrganizerService.update(this.state.currentOrganizer.id, updatedOrganizer)
    .then(response => {
      this.setState(prevState => ({
        currentOrganizer: {
          ...prevState.currentOrganizer
        }
      }));
      console.log(response.data);
      this.props.history.push('/organizer')
    })
    .catch(e => {
      console.log(e);
    });
  }

  onChangeLastName(e) {
    const lastname = e.target.value;

    this.setState(function (prevState) {
      return {
        currentOrganizer: {
          ...prevState.currentOrganizer,
          lastName: lastname
        }
      };
    });
  }

  saveHost() {
    console.log("Save is Clicked");
    this.saveOrganizer();
    var updatedHost = {
      hostid: null,
      organizer: this.state.currentOrganizer,
      events: this.state.currentEvent
    };

    HostService.create(updatedHost)
    .then(response => {
      this.setState(prevState => ({
        currentHost: {
          ...prevState.currentHost
        }
      }));
      this.props.history.push('/organizer')
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  }

  getHost(id) {
    HostService.get(id)
    .then(response => {
      this.setState({
        currentHost: response.data
      });
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  }


  getEvent(id) {
    EventsService.get(id)
    .then(response => {
      this.setState({
        currentEvent: response.data
      });
      console.log(this.state.currentEvent);
    })
    .catch(e => {
      console.log(e);
    });
  }

  getOrganizer(id) {
    OrganizerService.get(id)
    .then(response => {
      this.setState({
        currentOrganizer: response.data
      });
      console.log(this.state.currentOrganizer);
    })
    .catch(e => {
      console.log(e);
    });
  }

  retrieveAllEvent() {
    EventsService.getAll()
    .then(response => {
      this.setState({
        event: response.data
      });
      console.log(this.state.event);
    })
    .catch(e => {
      console.log(e);
    });
  }

  retrieveAllOrganizer() {
    OrganizerService.getAll()
    .then(response => {
      this.setState({
        organizers: response.data
      });
      console.log(this.state.organizers);
    })
    .catch(e => {
      console.log(e);
    });
  }

  render() {
    const {currentEvent, currentOrganizer} = this.state;

    const EventOptions = this.state.event.map(data => ({
      value: data.eventid,
      text: data.name + " " + data.type
    }))

    const OrganizerOptions = this.state.organizers.map(data => ({
      value: data.id,
      text: data.firstName + " " + data.lastName
    }))

    return (<div>
          {
            <div className="edit-form">
              <Grid relaxed>
                <Grid.Row>
                  <Header as='h2'>Host Sign Up</Header>
                </Grid.Row>

                <Grid.Row>

                  <Grid.Column width={8}>
                    <Form>
                      <Form.Group widths='equal'>
                        <Form.Input
                            label="First Name"
                            type="text"
                            id="title"
                            value={currentOrganizer.firstName}
                            onChange={(e) => this.onChangeFirstName(e)}
                        />
                        <Form.Input
                            label="Last Name"
                            type="text"
                            id="title"
                            value={currentOrganizer.lastName}
                            onChange={(e) => this.onChangeLastName(e)}
                        />
                      </Form.Group>
                      <Form.Group widths='equal'>
                        <Form.Input
                            label="Company"
                            type="text"
                            id="comapny"
                            value={currentOrganizer.company}
                            onChange={(e) => this.onChangeCompany(e)}
                        />
                        <Form.Input
                            label="Phone"
                            type="phone"
                            id="phone"
                            value={currentOrganizer.phone}
                            onChange={(e) => this.onChangePhone(e)}
                        />
                      </Form.Group>
                      <Form.Input
                          label="Email"
                          type="text"
                          id="email"
                          value={currentOrganizer.email}
                          onChange={(e) => this.onChangeEmail(e)}
                      />
                      <Form.Input
                          label="Date Of Birth"
                          type="date"
                          id="title"
                          value={currentOrganizer.dateOfBirth}
                          onChange={(e) => this.onChangeDOB(e)}
                      />
                    </Form>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Form>
                      <Form.Select
                          fluid
                          label='Event'
                          options={EventOptions}
                          value={currentEvent.eventid}
                          placeholder='Select an Event'
                          onChange={(e, {value}) => this.getEvent(value)}
                      />
                    </Form>{currentEvent.name &&
                  <div>
                  <Card
                      className = "mt-3"
                      fluid
                      link={"/event/find/" + currentEvent.eventid}
                      header={currentEvent.name + " " + currentEvent.type}
                      meta={currentEvent.startdate + "-" + currentEvent.enddate}
                      description={currentEvent.description}
                      extra={"Entry Fee: $" + currentEvent.fee}
                  />
                      <Button
                          primary
                          as={Link}
                          to={"/host/" + currentEvent.id + currentOrganizer}
                          onClick={() => this.saveHost()}
                      >
                        Host this Event
                      </Button>
                    </div>}
                    {currentEvent.name == "" &&
                        <Button
                            className = "mt-3"
                            primary
                            as={Link}
                            to={"/event/create"}
                        >
                          Create a New Event
                        </Button>
                    }
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          }
        </div>
    );
  }

}

export default HostPage;