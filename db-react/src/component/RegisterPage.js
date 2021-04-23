import React, {Component} from "react";
import CustomerService from "../service/CustomerService";
import {Header, Input, Form, Button} from 'semantic-ui-react';
import {Link} from "react-router-dom";
import EventsService from "../service/EventsService";


class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeDOB = this.onChangeDOB.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.saveCustomer = this.saveCustomer.bind(this);
        this.saveRegister = this.saveRegister.bind(this);
        this.getCustomer = this.getCustomer.bind(this);
        this.getEvent = this.getEvent.bind(this);

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
            customer: null,
            event: null,
            updated: false
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
                this.props.history.push('/customer')
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

    getCustomer(id) {
        CustomerService.get(id)
            .then(response => {
                this.setState({
                    currentCustomer: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }


}

export default RegisterPage;