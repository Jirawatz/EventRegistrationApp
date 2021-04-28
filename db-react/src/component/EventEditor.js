import React, { Component } from "react";
import EventsService from "../service/EventsService";
import {Header, Input, Form, Button, Grid, List} from 'semantic-ui-react';
import {Link} from "react-router-dom";
import OrganizerService from "../service/OrganizerService";
import CustomerService from "../service/CustomerService";

const options = [
  { key: 'Expo', text: 'Expo', value: 'Expo' },
  { key: 'Conference', text: 'Conference', value: 'Conference' },
  { key: 'Concert', text: 'Concert', value: 'Concert' },
]

class EventEditor extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeEndDate = this.onChangeEndDate.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeFee = this.onChangeFee.bind(this);
    this.saveEvent = this.saveEvent.bind(this);
    this.removeEvent = this.removeEvent.bind(this);
    this.getEvent = this.getEvent.bind(this);
    this.getOrganizers = this.getOrganizers.bind(this);
    this.getCustomers = this.getCustomers.bind(this);

    this.state = {
      currentEvent: {
        eventid: null,
        name: "",
        type: "",
        startdate: "",
        enddate: "",
        description: "",
        fee: ""
      },
      organizers : [],
      customers : []
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    this.getEvent(this.props.match.params.id);
    this.getCustomers();
    this.getOrganizers();
  }

  onChangeName(e) {
    console.log(e.target.value);
    const name = e.target.value;

    this.setState(function(prevState) {
      return {
        currentEvent: {
          ...prevState.currentEvent,
          name: name
        }
      };
    });
  }

  onChangeType(e) {
    console.log(e);

    const type = e

    this.setState(function(prevState) {
      return {
        currentEvent: {
          ...prevState.currentEvent,
          type : type
        }
      };
    });
  }

  onChangeStartDate(e) {
      console.log(e.target.value);
      const startdate = e.target.value

      this.setState(function(prevState) {
        return {
          currentEvent : {
            ...prevState.currentEvent,
            startdate : startdate
          }
        };
      });
    }

  onChangeEndDate(e) {
    console.log(e.target.value);
    const enddate = e.target.value

    this.setState(function(prevState) {
      return {
        currentEvent : {
          ...prevState.currentEvent,
          enddate : enddate
        }
      };
    });
  }

  onChangeDescription(e) {
    console.log(e.target.value);
    const description = e.target.value

    this.setState(function(prevState) {
      return {
        currentEvent : {
          ...prevState.currentEvent,
          description : description
        }
      };
    });
  }

  onChangeFee(e) {
    console.log(e.target.value);
    const fee = e.target.value

    this.setState(function (prevState) {
      return {
        currentEvent : {
          ...prevState.currentEvent,
          fee : fee
        }
      };
    });
  }

  saveEvent() {
    console.log("Save is Clicked");
    var updatedEvent = {
      eventid: this.state.currentEvent.eventid,
      name: this.state.currentEvent.name,
      type: this.state.currentEvent.type,
      startdate: this.state.currentEvent.startdate,
      enddate: this.state.currentEvent.enddate,
      description: this.state.currentEvent.description,
      fee: this.state.currentEvent.fee
    };

    EventsService.update(this.state.currentEvent.eventid, updatedEvent)
    .then(response => {
      this.setState(prevState => ({
        currentEvent: {
          ...prevState.currentEvent
        }
      }));
      this.props.history.push('/event')
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
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  }

  removeEvent() {
    console.log("Delete is Clicked");
    EventsService.delete(this.state.currentEvent.eventid)
    .then(response => {
      console.log(response.data);
      this.props.history.push('/event')
    })
    .catch(e => {
      console.log(e);
    });
  }

  getOrganizers() {
    OrganizerService.findOrganizerByEvent(this.props.match.params.id)
    .then(response => {
      this.setState({
        organizers: response.data
      });
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  }

  getCustomers() {
    CustomerService.findCustomerByEvent(this.props.match.params.id)
    .then(response => {
      this.setState({
        customers: response.data
      });
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  }

  render() {
    const { currentEvent, organizers, customers } = this.state;

    console.log(organizers);

    return (<div>
      {currentEvent ? (
          <div className="edit-form">
            <Header as='h2'>Event</Header>
            <Form>
              <Form.Group widths='equal'>
                <Form.Input
                    label="Event Name"
                    type="text"
                    id="title"
                    value={currentEvent.name}
                    onChange={(e) => this.onChangeName(e)}
                />
                <Form.Select
                    fluid
                    label='Type'
                    options={options}
                    value = {currentEvent.type}
                    placeholder='Type of Expo'
                    onChange = {(e, {value}) => this.onChangeType(value)}
                />

            </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input
                    fluid
                    type="date"
                    label='Start Date'
                    value = {currentEvent.startdate}
                    onChange = {(e) => this.onChangeStartDate(e)}
                />
                <Form.Input
                    fluid
                    type="date"
                    label='End Date'
                    value = {currentEvent.enddate}
                    onChange = {(e) => this.onChangeEndDate(e)}
                />
              </Form.Group>
              <Form.TextArea
                  fluid
                  label='Description'
                  placeholder='Tell us more about you...'
                  value = {currentEvent.description}
                  onChange = {(e) => this.onChangeDescription(e)}
              />
              <Form.Input
                  fluid
                  type = "number"
                  label='Fee'
                  placeholder='Fee to Attend Event'
                  value = {currentEvent.fee}
                  onChange = {(e) => this.onChangeFee(e)}
              />
              <Form.Group>
              <Button
                  color={"green"}
                  as={Link} to = "/"
                  onClick={() => this.saveEvent()}
              >Submit</Button>
              <Button
                  as={Link} to = "/"
                  onClick={() => this.removeEvent()}
              >Delete</Button>
                <Button
                    as={Link} to = {"/review/event/" + this.props.match.params.id}
                >Read Review</Button>
                {this.props.match.params.regid && <Button
                    as={Link} to = {"/host/" + this.props.match.params.regid + "/event/" + currentEvent.eventid + "/organizer/" + this.props.match.params.orgid}
                >Back to Edit Hosting</Button>}
              </Form.Group>
            </Form>
            <Grid className = "ml-2 mt-5">
              <Grid.Row columns='equal'>
                <Grid.Column>
                  <h4>List of Organizers</h4>
                  <List>

                    {organizers && organizers.map((organizer) => (
                    <List.Item>
                      <List.Content>
                        <Link to={"/organizer/find/" + organizer.id}>
                        <List.Header as='a'>{organizer.firstName + " " + organizer.lastName}</List.Header>
                        </Link>
                        <List.Description>
                          {"Company: " + organizer.company + "\n Phone: " + organizer.phone}
                        </List.Description>
                      </List.Content>
                    </List.Item>
                      ))}
                  </List>
                  </Grid.Column>
                <Grid.Column>
                  <h4>List of Customers</h4>
                  <List>

                    {customers && customers.map((customer) => (
                        <List.Item>
                          <List.Content>
                            <Link to={"/customer/find/" + customer.id}>
                              <List.Header as='a'>{customer.firstName + " " + customer.lastName}</List.Header>
                            </Link>
                            <List.Description>
                              {"Email: " + customer.email}
                            </List.Description>
                          </List.Content>
                        </List.Item>
                    ))}
                  </List>


                </Grid.Column>
              </Grid.Row>
              </Grid>
          </div>
      ) : (
          <div>
            <br />
            <p>Please click on an Event...</p>
          </div>
      )}
    </div>
    );
  }

}

export default EventEditor;