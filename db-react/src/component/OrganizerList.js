import React, {Component} from 'react'
import OrganizerService from "../service/OrganizerService";
import { Link } from "react-router-dom";
import {Input, Button, Grid, Header} from 'semantic-ui-react'

class OrganizerList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveOrganizers = this.retrieveOrganizers.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveOrganizer = this.setActiveOrganizer.bind(this);
    this.removeAllOrganizers = this.removeAllOrganizers.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      organizers: [],
      currentOrganizer : null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveOrganizers();
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.retrieveOrganizers()
    }
  }

  onChangeSearchName(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveOrganizers() {
    OrganizerService.getAll()
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

  refreshList() {
    this.retrieveOrganizers();
    this.setState({
      currentOrganizer: null,
      currentIndex: -1
    })
  }

  setActiveOrganizer(organizer, index) {
    this.setState({
      currentOrganizer: organizer,
      currentIndex: index
    })
  }

  removeAllOrganizers() {
    //TODO Create a REST API in Springboot that remove all events and implement AXIOS method
  }

  searchTitle() {
    //TODO Create a REST API in SpingBoot that query the text by title and implement AXIOS method
    console.log(this.state.searchTitle);
    OrganizerService.findByName(this.state.searchTitle)
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


  render() {
    const {searchTitle, organizers, currentOrganizer, currentIndex } = this.state;

    return (
        <Grid container style={{ padding: '0em 0em' }}>
          <Grid.Row>
            <Grid.Column>
              <Header as='h1' dividing>
                Finding List of Organizer
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Input
                  fluid
                  type='text'
                  placeholder='Search Organizer...'
                  value={searchTitle}
                  onChange={(e) => this.onChangeSearchName(e)}
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
              <Link to="/organizer/create">Sign Up</Link>
              <div className="ui items">
                {organizers &&
                this.state.organizers.map((organizer, index) => (
                    <li
                        className={
                          "list-group-item " +
                          (index === currentIndex ? "active" : "")
                        }
                        onClick={() => this.setActiveOrganizer(organizer, index)}
                        key={index}
                    ><h4>{organizer.firstName}  {organizer.lastName}</h4>
                    </li>
                ))}
              </div>
            </Grid.Column>
            <Grid.Column width={6}>
              <div>
                {currentOrganizer ? (
                    <div>
                      <h3>Organizer Information:</h3>
                      <div>
                        <label>
                          <strong>Organizer Name:</strong>
                        </label>{" "}
                        {currentOrganizer.firstName}  {currentOrganizer.lastName}
                      </div>
                      <div>
                        <label>
                          <strong>Email:</strong>
                        </label>{" "}
                        {currentOrganizer.email}
                      </div>
                      <div>
                        <label>
                          <strong>Company:</strong>
                        </label>{" "}
                        {currentOrganizer.company}
                      </div>
                      <div>
                        <label>
                          <strong>Contact:</strong>
                        </label>{" "}
                        {currentOrganizer.phone}
                      </div>
                      <div className= "mt-2">
                        <Button
                            as={Link} to = {"/organizer/find/" + currentOrganizer.id}
                        >
                          Update
                        </Button>
                        <Button
                            as={Link} to = {"/event/host/" + currentOrganizer.id}
                        >
                          Looking For Event to Host
                        </Button>
                      </div>
                    </div>
                ) : (
                    <div>
                      <br />
                      <p>Please click on a Organizer to read about the organizer...</p>
                    </div>
                )}
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    )
  }


}

export default OrganizerList ;
