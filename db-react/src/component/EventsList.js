import React, {Component} from 'react'
import EventsService from "../service/EventsService";
import { Link } from "react-router-dom";
import {Input, Button, Grid, Header, Icon} from 'semantic-ui-react'

class EventsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveEvents = this.retrieveEvents.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveEvent = this.setActiveEvent.bind(this);
    this.removeAllEvents = this.removeAllEvents.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      events: [],
      currentEvent : null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveEvents();
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.retrieveEvents()
    }
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveEvents() {
    EventsService.getAll()
    .then(response => {
      this.setState({
        events: response.data
      });
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  }

  refreshList() {
    this.retrieveEvents();
    this.setState({
      currentEvent: null,
      currentIndex: -1
    })
  }

  setActiveEvent(event, index) {
    this.setState({
      currentEvent: event,
      currentIndex: index
    })
  }

  removeAllEvents() {
    //TODO Create a REST API in Springboot that remove all events and implement AXIOS method
  }

  searchTitle() {
    //TODO Create a REST API in SpingBoot that query the text by title and implement AXIOS method
    console.log(this.state.searchTitle);
    EventsService.findByName(this.state.searchTitle)
    .then(response => {
      this.setState({
        events: response.data
      });
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });

  }


  render() {
    const {searchTitle, events, currentEvent, currentIndex } = this.state;

    return (
        <Grid container style={{ padding: '0em 0em' }}>
          <Grid.Row>
            <Grid.Column>
              <Header as='h1' dividing>
                Finding List of Events
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Input
                fluid
                type='text'
                placeholder='Search Events...'
                value={searchTitle}
                onChange={(e) => this.onChangeSearchTitle(e)}
               />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Button
                  as='a'
                  tabIndex='0'
                  onClick={( ) => this.searchTitle()}>
                Search
              </Button>
              <Button
                  as='a'
                  tabIndex='0'
                  onClick={() => this.refreshList()}>
                Reset
              </Button>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={10}>
              <Link to="/event/create">Create an Event</Link>
              <div className="ui items">
                {events &&
                this.state.events.map((event, index) => (
                    <li
                        className={
                          "list-group-item " +
                          (index === currentIndex ? "active" : "")
                        }
                        onClick={() => this.setActiveEvent(event, index)}
                        key={index}
                    ><h4>{event.name}  {event.type}</h4><p>{event.startdate} - {event.enddate}</p>
                    </li>
                ))}
              </div>
            </Grid.Column>
            <Grid.Column width={6}>
              <div>
                {currentEvent ? (
                    <div>
                      <h3>Event Information:</h3>
                      <div>
                        <label>
                          <strong>Event Name:</strong>
                        </label>{" "}
                        {currentEvent.name}
                      </div>
                      <div>
                        <label>
                          <strong>Description:</strong>
                        </label>{" "}
                        {currentEvent.description}
                      </div>
                      <div className= "mt-2">
                      <Button
                          primary
                          as={Link} to = {"/event/find/" + currentEvent.eventid}
                      >
                        Update
                      </Button>
                      <Button
                          color='green'
                          as={Link} to = {"/register/find/" + currentEvent.eventid}
                      >
                        Register
                      </Button>
                        <Button
                            color='yellow'
                            as={Link} to = {"/review/event/" + currentEvent.eventid}
                        >
                          <Icon name='lightbulb' />
                          Read Reviews
                        </Button>
                      </div>
                    </div>
                ) : (
                    <div>
                      <br />
                      <p>Please click on a Event to read about the event...</p>
                    </div>
                )}
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    )
  }


}

export default EventsList;
