import React, { Component } from "react";
import EventsService from "../service/EventsService";
import {Header, Input, Form, Button} from 'semantic-ui-react';
import {Link} from "react-router-dom";

class HostPage extends Component {
    constructor(props) {
        super(props);
        this.onChangeEventId = this.onChangeEventId.bind(this);
        this.onChangeOrganizerId = this.onChangeOrganizerId.bind(this);
        this.saveHost = this.saveHost.bind(this);
        this.removeHost = this.removeHost.bind(this);
        this.getHost = this.getHost.bind(this);

        this.state = {
            currentHost: {
                hostId: null,
                eventId: "",
                organizerId: "",
            }
        };
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        this.getEvent(this.props.match.params.id);
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

    render() {
        const { currentHost } = this.state;

        return (<div>
                {currentHost ? (
                    <div className="edit-form">
                        <Header as='h2'>Host</Header>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    label="Event id"
                                    type="text"
                                    id= null
                                    value={currentHost.eventId}
                                    onChange={(e) => this.onChangeEventId(e)}
                                />
                                <Form.Input
                                    label="Organizer id"
                                    type="text"
                                    id= null
                                    value={currentHost.organizerId}
                                    onChange={(e) => this.onChangeOrganizerId(e)}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Button
                                    as={Link} to = "/"
                                    onClick={() => this.saveHost()}
                                >Submit</Button>
                                <Button
                                    as={Link} to = "/"
                                    onClick={() => this.removeHost()}
                                >Delete</Button>
                            </Form.Group>
                        </Form>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Please click on a Host...</p>
                    </div>
                )}
            </div>
        );
    }

}

export default HostPage;