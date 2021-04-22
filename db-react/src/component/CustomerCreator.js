import React, { Component } from "react";
import CustomerService from "../service/CustomerService";
import {Header, Input, Form, Button } from 'semantic-ui-react';
import {Link} from "react-router-dom";

const options = [
  { key: 'Male', text: 'Male', value: 'Male' },
  { key: 'Female', text: 'Female', value: 'Female' },
  { key: 'Nonbinary', text: 'Non Binary', value: 'Nonbinary' },
  { key: 'Nopreference', text: 'No Preference', value: 'Nopreference' }
]

class CustomerCreator extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeDOB = this.onChangeDOB.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.saveCustomer = this.saveCustomer.bind(this);

    this.state = {
      currentCustomer : {
        id : null,
        firstName : "",
        lastName : "",
        username : "",
        password : "",
        email : "",
        dateOfBirth : "",
        age : "",
        gender : ""
      }
    };
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


  onChangePassword(e) {
    const password = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCustomer: {
          ...prevState.currentCustomer,
          password: password
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
          username : email
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
          age : age
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
      id : this.state.currentCustomer.id,
      firstName : this.state.currentCustomer.firstName,
      lastName : this.state.currentCustomer.lastName,
      username : this.state.currentCustomer.username,
      password : this.state.currentCustomer.password,
      email : this.state.currentCustomer.email,
      dateOfBirth : this.state.currentCustomer.dateOfBirth,
      age : this.state.currentCustomer.age,
      gender : this.state.currentCustomer.gender
    }

    CustomerService.create(updatedCustomer)
    .then(response => {
      this.setState(prevState => ({
        currentCustomer: {
          ...prevState.currentCustomer
        }
      }));
      console.log(response.data);
      this.props.history.push('/customer')
    })
    .catch(e => {
      console.log(e);
    });
  }



  render() {
    const { currentCustomer } = this.state;

    return (<div>
              <div className="edit-form">
                <Header as='h2'>Customer</Header>
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
                  <Form.Input
                      label="Password"
                      type="password"
                      id="password"
                      value={currentCustomer.password}
                      onChange={(e) => this.onChangePassword(e)}
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
                      value = {currentCustomer.gender}
                      placeholder='Gender'
                      onChange = {(e, {value}) => this.onChangeGender(value)}
                  />
                  <Button
                      as={Link} to = "/"
                      onClick={() => this.saveCustomer()}
                  >Save</Button>
                </Form>
              </div>
        </div>
    );
  }
}

export default CustomerCreator;