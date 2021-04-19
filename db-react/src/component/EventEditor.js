import React, { Component } from "react";
import EventsService from "../service/EventsService";
import { Header, Input, Form } from 'semantic-ui-react';

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

    this.state = {
      currentEvent: {
        eventid: null,
        name: "",
        type: "",
        startdate: "",
        enddate: "",
        description: "",
        fee: ""
      }
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    this.getEvent(this.props.match.params.id);
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
      //this.props.history.push('/event')
    })
    .catch(e => {
      console.log(e);
    });
  }

  render() {
    const { currentEvent } = this.state;

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
              <Form.Button
                  onClick={() => this.saveEvent()}
              >Submit</Form.Button>
              <Form.Button
                  onClick={() => this.removeEvent()}
              >Delete</Form.Button>
              </Form.Group>
            </Form>
          </div>
      ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
      )}
    </div>
    );
  }

}

export default EventEditor;