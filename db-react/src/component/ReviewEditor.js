import React, { Component } from "react";
import ReviewService from "../service/ReviewService";
import {Header, Input, Form, Button, Dropdown, Rating} from 'semantic-ui-react';
import CustomerService from "../service/CustomerService";
import EventsService from "../service/EventsService";

class ReviewEditor extends Component {
  constructor(props) {
    super(props);
    this.onChangeScore = this.onChangeScore.bind(this);
    this.onChangeComment = this.onChangeComment.bind(this);
    this.onChangeEvent = this.onChangeEvent.bind(this);
    this.onChangeCustomer = this.onChangeCustomer.bind(this);
    this.saveReview = this.saveReview.bind(this);
    this.removeReview = this.removeReview.bind(this);
    this.getReview = this.getReview.bind(this);
    this.getCustomer = this.getCustomer.bind(this);
    this.getEvent = this.getEvent.bind(this);
    this.retrieveParam = this.retrieveParam.bind(this);

    this.state = {
      currentReview : {
        reviewId : null,
        score : 0,
        comments : "",
        customer : null,
        event : null
      },
      customers : [],
      events : [],
      custid : -1,
      eventid : -1
    };
  }

  componentDidMount() {
    this.getReview(this.props.match.params.id);
    this.getCustomer();
    this.getEvent();
    this.retrieveParam(this.props.match.params.custid, this.props.match.params.eventid);
  }

  onChangeScore(e) {
    const score = e;

    this.setState(function (prevState) {
      return {
        currentReview : {
          ...prevState.currentReview,
          score : score
        }
      };
    });
  }

  onChangeComment(e) {
    const comment = e.target.value;

    this.setState(function (prevState) {
      return {
        currentReview : {
          ...prevState.currentReview,
          comments : comment
        }
      };
    });
  }

  onChangeEvent(e) {
    console.log(e);
    EventsService.get(e)
    .then(response => {
      this.setState(function (prevState) {
        return {
          currentReview: {
            ...prevState.currentReview,
            event: response.data
          },
          eventid : response.data.eventid
        };
      });
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  }

  onChangeCustomer(e) {
    console.log(e);
    CustomerService.get(e)
    .then(response => {
      this.setState(function (prevState) {
        return {
          currentReview: {
            ...prevState.currentReview,
            customer: response.data
          },
          custid : response.data.id
        };
      });
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  }

  saveReview() {
    var updatedReview = {
      reviewId : this.state.currentReview.reviewId,
      score : this.state.currentReview.score,
      comments : this.state.currentReview.comments,
      customer : this.state.currentReview.customer,
      event : this.state.currentReview.event
    }

    console.log("Save is Clicked");
    console.log(this.state.currentReview.score);
    console.log(this.state.currentReview.customer);
    console.log(this.state.currentReview.event);

    ReviewService.update(this.state.currentReview.reviewId, updatedReview)
    .then(response => {
      this.setState(prevState => ({
        currentReview :{
          ...prevState.currentReview
        }
      }));
      console.log(response.data);
      this.props.history.push("/review/event/"+ this.state.eventid)
    })
    .catch(e => {
      console.log(e);
    });
  }

  getReview(id) {
   ReviewService.get(id)
    .then(response => {
      this.setState({
        currentReview : response.data
      });
      console.log(response.data);
    })
   .catch(e => {
     console.log(e);
   });
  }

  getCustomer() {
    CustomerService.getAll()
    .then(response => {
      this.setState({
        customers : response.data
      });
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  }

  getEvent() {
    EventsService.getAll()
    .then(response => {this.setState({
      events : response.data
    });
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  }

  retrieveParam(custid, eventid) {
    this.setState({
      custid : parseInt(custid),
      eventid : parseInt(eventid)
    })
  }

  removeReview() {
    ReviewService.delete(this.state.currentReview.reviewId)
    .then(response => {
      console.log(response.data);
      this.props.history.push("/review/event/"+ this.state.eventid)
    })
    .catch(e => {
      console.log(e);
    });
  }

  render() {
    const { currentReview, customers, events, custid, eventid } = this.state;

    const optionsCustomer = customers.map(({id, firstName, lastName}) => ({
      value: id,
      text: firstName + " " + lastName
    }))

    const optionsEvent = events.map(({eventid, name, type}) => ({
      value: eventid,
      text: name + " " + type
    }))

    console.log(custid);
    console.log(eventid);


    return (<div>
          <div className="edit-form">
            <Header as='h2'>Review</Header>
            <Form>
              <Form.Group widths='equal'>
              <Form.Dropdown
                  label="Customer"
                  placeholder='Select User'
                  fluid
                  selection
                  options={optionsCustomer}
                  value ={custid}
                  className="mt-2"
                  disabled
              />
                <Form.Dropdown
                    label="Event"
                    placeholder='Select Event'
                    fluid
                    selection
                    options={optionsEvent}
                    value ={eventid}
                    className="mt-2"
                    disabled
                />
              </Form.Group>
              <Form.TextArea
                  label="Comment"
                  value={currentReview.comments}
                  onChange={(e) => this.onChangeComment(e)}
              />
              <Rating
                  maxRating={5}
                  size='large'
                  rating={currentReview.score}
                  clearable
                  onRate={(e, { rating }) => this.onChangeScore(rating)}
              />
            <Form.Group>
              <Form.Button
                  className = "mt-3"
                  primary
                  onClick={() => this.saveReview()}
              >Save
              </Form.Button>
              <Form.Button
                  className = "mt-3"
                  onClick={() => this.removeReview()}
              >Remove
              </Form.Button>
            </Form.Group>
            </Form>
          </div>
        </div>
    );
  }

}

export default ReviewEditor;