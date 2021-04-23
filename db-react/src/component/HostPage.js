import React, {Component} from "react";
import OrganizerService from "../service/OrganizerService";
import {Button, Form, Grid, Header, Card} from 'semantic-ui-react';
import {Link} from "react-router-dom";
import EventsService from "../service/EventsService";
import HostService from "../service/HostService";


class HostPage extends Component {
    constructor(props) {
        super(props);
        this.onChangeEventId = this.onChangeEventId.bind(this);
        this.onChangeOrganizerId = this.onChangeOrganizerId.bind(this);
        this.saveHost = this.saveHost.bind(this);
        this.removeHost = this.removeHost.bind(this);
        this.getHost = this.getHost.bind(this);
        this.getOrganizer = this.getOrganizer.bind(this);
        this.getEvent = this.getEvent.bind(this);
        this.retrieveAllEvent = this.retrieveAllEvent.bind(this);
        this.retrieveAllOrganizer = this.retrieveAllOrganizer.bind(this);

        this.state = {
            organizers: [],
            currentOrganizer : {
            currentIndex: -1,
            searchTitle: ""
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
        console.log(this.props.match.params.id);
        this.getHost(this.props.match.params.id);
        this.retrieveAllEvent();
        this.retrieveAllOrganizer();
    }

    onChangeEventId(e) {
        console.log(e.target.value);
        const eventId = e.target.value;

        this.setState(function(prevState) {
            return {
                currentHost: {
                    ...prevState.currentHost,
                    eventId: eventId
                }
            };
        });
    }

    onChangeOrganizerId(e) {
        console.log(e.target.value);
        const organizerId = e.target.value;

        this.setState(function(prevState) {
            return {
                currentHost: {
                    ...prevState.currentHost,
                    organizerId: organizerId
                }
            };
        });
    }

    saveHost() {
        console.log("Save is Clicked");
        var updatedHost = {
            hostId: this.state.currentHost.hostId,
            organizerId: this.state.currentHost.organizerId,
            eventId: this.state.currentHost.eventId
        };

        HostService.update(this.state.currentHost.hostId, updatedHost)
            .then(response => {
                this.setState(prevState => ({
                    currentHost: {
                        ...prevState.currentHost
                    }
                }));
                this.props.history.push('/host')
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

    removeHost() {
        console.log("Delete is Clicked");
        HostService.delete(this.state.currentHost.hostId)
            .then(response => {
                console.log(response.data);
                this.props.history.push('/host')
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

                                <Grid.Column width={6}>

                                    <Form>
                                        <Form.Select
                                            fluid
                                            label='Organizer'
                                            options={OrganizerOptions}
                                            value={currentOrganizer.organizerId}
                                            placeholder='Select an organizer'
                                            onChange={(e, {value}) => this.getOrganizer(value)}
                                        />
                                    </Form>{currentOrganizer.name &&

                                <Card
                                    fluid
                                    link={"/event/find/" + currentEvent.eventid}
                                    header={currentEvent.name + " " + currentEvent.type}
                                    meta={currentEvent.startdate + "-" + currentEvent.enddate}
                                    description={currentEvent.description}
                                    extra={"Entry Fee: $" + currentEvent.fee}
                                />}
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
                                />}
                                </Grid.Column>
                            </Grid.Row>
                            <div>
                                <Button
                                    primary
                                    as={Link} to = {"/host/" + currentEvent.id + currentOrganizer}
                                    onClick={() => this.saveHost()}
                                >
                                    Register
                                </Button>
                            </div>
                        </Grid>
                    </div>
                }
            </div>
        );
    }

}

export default HostPage;