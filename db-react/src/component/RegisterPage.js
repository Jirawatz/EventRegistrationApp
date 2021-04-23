import React, {Component} from "react";
import CustomerService from "../service/CustomerService";
import {Button, Form, Grid, Header, Card} from 'semantic-ui-react';
import {Link} from "react-router-dom";
import EventsService from "../service/EventsService";
import RegisterService from "../service/RegisterService";

const options = [
  {key: 'Male', text: 'Male', value: 'Male'},
  {key: 'Female', text: 'Female', value: 'Female'},
  {key: 'Nonbinary', text: 'Non Binary', value: 'Nonbinary'},
  {key: 'Nopreference', text: 'No Preference', value: 'Nopreference'}
]

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeDOB = this.onChangeDOB.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.saveCustomer = this.saveCustomer.bind(this);
    this.saveRegister = this.saveRegister.bind(this);
    this.getCustomer = this.getCustomer.bind(this);
    this.getEvent = this.getEvent.bind(this);
    this.retrieveAllEvent = this.retrieveAllEvent.bind(this);

    this.state = {
      currentCustomer: {
        id: null,
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        email: "",
        dateOfBirth: "",
        age: "",
        gender: ""
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
    this.getCustomer(this.props.match.params.id);
    this.retrieveAllEvent();
  }

  onChangeFirstName(e) {
    const firstname = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCustomer: {
          ...prevState.currentCustomer,
          firstName: firstname
        }
      };
    });
  }

  onChangeLastName(e) {
    const lastname = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCustomer: {
          ...prevState.currentCustomer,
          lastName: lastname
        }
      };
    });
  }

  onChangeEmail(e) {
    const email = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCustomer: {
          ...prevState.currentCustomer,
          email: email,
          username: email
        }
      };
    });
  }

  calculate_age(dob) {
    const date = new Date(dob)
    var diff_ms = Date.now() - date.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  onChangeDOB(e) {
    const dob = e.target.value;
    const age = this.calculate_age(dob);

    console.log(dob);
    console.log(age);

    this.setState(function (prevState) {
      return {
        currentCustomer: {
          ...prevState.currentCustomer,
          dateOfBirth: dob,
          age: age
        }
      };
    });
  }

  onChangeGender(e) {
    const gender = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCustomer: {
          ...prevState.currentCustomer,
          gender: gender
        }
      };
    });
  }

  onChangeGender(e) {
    console.log(e);
    const gender = e;

    this.setState(function (prevState) {
      return {
        currentCustomer: {
          ...prevState.currentCustomer,
          gender: gender
        }
      };
    });
  }

  saveCustomer() {
    var updatedCustomer = {
      id: this.state.currentCustomer.id,
      firstName: this.state.currentCustomer.firstName,
      lastName: this.state.currentCustomer.lastName,
      username: this.state.currentCustomer.username,
      password: this.state.currentCustomer.password,
      email: this.state.currentCustomer.email,
      dateOfBirth: this.state.currentCustomer.dateOfBirth,
      age: this.state.currentCustomer.age,
      gender: this.state.currentCustomer.gender
    }

    CustomerService.update(this.state.currentCustomer.id, updatedCustomer)
    .then(response => {
      this.setState(prevState => ({
        currentCustomer: {
          ...prevState.currentCustomer
        }
      }));
      console.log(response.data);
      /*
      this.props.history.push(
          '/customer/' + this.props.match.params.id + '/register')
       */
    })
    .catch(e => {
      console.log(e);
    });
  }

  saveRegister() {
    console.log(this.state.currentCustomer);
    console.log(this.state.currentEvent);
    this.saveCustomer();
    var newRegister = {
      registrationid : null,
      customerid : this.state.currentCustomer,
      eventid : this.state.currentEvent
    }

    RegisterService.create(newRegister)

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

  getCustomer(id) {
    CustomerService.get(id)
    .then(response => {
      this.setState({
        currentCustomer: response.data
      });
      console.log(this.state.currentCustomer);
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

  render() {
    const {currentCustomer, currentEvent} = this.state;

    const EventOptions = this.state.event.map(data => ({
      value: data.eventid,
      text: data.name + " " + data.type
    }))


    return (<div>
          {currentCustomer ? (
              <div className="edit-form">
                <Grid relaxed>
                  <Grid.Row>
                    <Header as='h2'>Register for an Event</Header>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={10}>
                      <Form>
                        <Form.Group widths='equal'>
                          <Form.Input
                              label="First Name"
                              type="text"
                              id="title"
                              value={currentCustomer.firstName}
                              onChange={(e) => this.onChangeFirstName(e)}
                          />
                          <Form.Input
                              label="Last Name"
                              type="text"
                              id="title"
                              value={currentCustomer.lastName}
                              onChange={(e) => this.onChangeLastName(e)}
                          />
                        </Form.Group>
                        <Form.Input
                            label="Email"
                            type="text"
                            id="email"
                            value={currentCustomer.email}
                            onChange={(e) => this.onChangeEmail(e)}
                        />
                        <Form.Group widths='equal'>
                          <Form.Input
                              label="Date Of Birth"
                              type="date"
                              id="title"
                              value={currentCustomer.dateOfBirth}
                              onChange={(e) => this.onChangeDOB(e)}
                          />
                          <Form.Input
                              label="Age"
                              type="number"
                              id="title"
                              value={currentCustomer.age}
                          />
                        </Form.Group>
                        <Form.Select
                            fluid
                            label='Gender'
                            options={options}
                            value={currentCustomer.gender}
                            placeholder='Gender'
                            onChange={(e, {value}) => this.onChangeGender(
                                value)}
                        />
                      </Form>
                    </Grid.Column>
                    <Grid.Column width={6}>
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
                      <Card
                          fluid
                          link={"/event/find/" + currentEvent.eventid}
                          header={currentEvent.name + " " + currentEvent.type}
                          meta={currentEvent.startdate + "-" + currentEvent.enddate}
                          description={currentEvent.description}
                          extra={"Entry Fee: $" + currentEvent.fee}
                      />}{currentEvent.name &&
                        <div>
                        <Button
                        primary
                        onClick={() => this.saveRegister()}
                        >
                          Register
                        </Button>
                      <Button
                      as={Link} to = {"/review/event/" + currentEvent.eventid}
                      >
                      Read Review
                      </Button>
                        </div>
                      }
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
          ) : (
              <div>
                <br/>
                <p>Please click on a Customer...</p>
              </div>
          )}
        </div>
    );
  }

}

export default RegisterPage;