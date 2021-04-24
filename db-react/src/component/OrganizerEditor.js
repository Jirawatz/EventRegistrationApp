import React, { Component } from "react";
import OrganizerService from "../service/OrganizerService";
import {Header, Input, Form, Button } from 'semantic-ui-react';
import {Link} from "react-router-dom";

class OrganizerEditor extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeDOB = this.onChangeDOB.bind(this);
    this.onChangeCompany = this.onChangeCompany.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.saveOrganizer = this.saveOrganizer.bind(this);
    this.getOrganizer = this.getOrganizer.bind(this);
    this.removeOrganizer = this.removeOrganizer.bind(this);

    this.state = {
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
      host: []
    };
  }


  componentDidMount() {
    console.log(this.props.match.params.id);
    this.getOrganizer(this.props.match.params.id);
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


  onChangePassword(e) {
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
          username : email
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
    
    this.setState(function(prevState) {
      return {
        currentOrganizer : {
          ...prevState.currentOrganizer,
          company : company
        }
      };
    });
  }

  onChangePhone(e) {
    const phone = e.target.value;

    this.setState(function(prevState) {
      return {
        currentOrganizer : {
          ...prevState.currentOrganizer,
          phone : phone
        }
      };
    });
  }

  saveOrganizer() {
    var updatedOrganizer = {
      id : this.state.currentOrganizer.id,
      firstName : this.state.currentOrganizer.firstName,
      lastName : this.state.currentOrganizer.lastName,
      username : this.state.currentOrganizer.username,
      password : this.state.currentOrganizer.password,
      email : this.state.currentOrganizer.email,
      dateOfBirth : this.state.currentOrganizer.dateOfBirth,
      company : this.state.currentOrganizer.company,
      phone : this.state.currentOrganizer.phone
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

  getOrganizer(id) {
    OrganizerService.get(id)
    .then(response => {
      this.setState({
        currentOrganizer : response.data
      });
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  }

  removeOrganizer() {
    OrganizerService.delete(this.state.currentOrganizer.id)
    .then(response => {
      console.log(response.data);
      this.props.history.push('/organizer')
    })
    .catch(e => {
      console.log(e);
    });
  }

  render() {
    const { currentOrganizer } = this.state;

    return (<div>
          {currentOrganizer ? (
              <div className="edit-form">
                <Header as='h2'>Organizer</Header>
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
                      label="Password"
                      type="password"
                      id="password"
                      value={currentOrganizer.password}
                      onChange={(e) => this.onChangePassword(e)}
                  />
                    <Form.Input
                        label="Date Of Birth"
                        type="date"
                        id="title"
                        value={currentOrganizer.dateOfBirth}
                        onChange={(e) => this.onChangeDOB(e)}
                    />
                  <Button
                      as={Link} to = "/"
                      onClick={() => this.saveOrganizer()}
                  >Submit</Button>
                  <Button
                      as={Link} to = "/"
                      onClick={() => this.removeOrganizer()}
                  >Delete</Button>
                </Form>
              </div>
          ) : (
              <div>
                <br />
                <p>Please click on a Organizer...</p>
              </div>
          )}
        </div>
    );
  }

}

export default OrganizerEditor;