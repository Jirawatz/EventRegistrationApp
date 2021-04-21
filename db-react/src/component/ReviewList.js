import React, {Component} from 'react'
import ReviewService from "../service/ReviewService";
import CustomerService from "../service/CustomerService";
import EventsService from "../service/EventsService";
import {Link} from "react-router-dom";
import {
  Button,
  Comment,
  Dropdown,
  Form,
  Header,
  Rating
} from 'semantic-ui-react'
import img from "../image/matt.jpeg"

class ReviewList extends Component {
  constructor(props) {
    super(props);
    this.retrieveReview = this.retrieveReview.bind(this);
    this.retreiveCustomer = this.retreiveCustomer.bind(this);
    this.retrieveEvent = this.retrieveEvent.bind(this);
    this.onChangeComment = this.onChangeComment.bind(this);
    this.onChangeScore = this.onChangeScore.bind(this);
    this.saveReview = this.saveReview.bind(this);

    this.state = {
      reviewid : null,
      reviews: [],
      customers: [],
      score: 0,
      comment: "",
      currentUser: null,
      message: "",
      currentEvent : null
    }
  }

  componentDidMount() {
    this.retrieveReview(this.props.match.params.id);
    this.retrieveEvent(this.props.match.params.id);
    this.retreiveCustomer();
  }

  //TODO
  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevState.reviews !== this.state.reviews){
      console.log("State Updated");
    }
  }

  retrieveReview(id) {
    ReviewService.getAllByEventId(id)
    .then(response => {
      this.setState({
        reviews: response.data
      });
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  }


  retreiveCustomer() {
    CustomerService.getAll()
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

  retrieveCustomerByID(e) {
    console.log(e);
    CustomerService.get(e)
    .then(response => {
      this.setState({
        currentUser: response.data
      });
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  }

  retrieveEvent(e) {
    EventsService.get(e)
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

  onChangeComment(e) {
    //console.log(e.target.value);
    const text = e.target.value
    this.setState({comment: text});
  }

  onChangeScore(e) {
    //console.log(e);
    const star = e
    this.setState({score: star});
  }

  saveReview() {
    //console.log("Save has been clicked");
    //console.log(this.state.currentEvent);
    console.log(this.state.currentCustomer);
    var newReview = {
      reviewid : null,
      comments: this.state.comment,
      score: this.state.score,
      customer: this.state.currentUser,
      event: this.state.currentEvent
    };

    ReviewService.create(newReview)
  }

  render() {
    const {reviews, customers, score, comment, currentUser, message} = this.state;

    return (
        <div>
          <Header as='h1' dividing>
            Review
          </Header>
          <Comment.Group>
            <div className="ui-items">
              {reviews && this.state.reviews.map((review) => (
                  <Comment>
                    <Comment.Avatar src={img}/>
                    <Comment.Content>
                      <Link to={"/customer/find/" + review.customer.id}>
                        <Comment.Author as='a'>
                          {review.customer.firstName + " "
                          + review.customer.lastName}
                        </Comment.Author>
                      </Link>
                      <Comment.Metadata>
                        {review.event.name + " " + review.event.type}
                      </Comment.Metadata>
                      <Comment.Text>{review.comments}</Comment.Text>
                      <Comment.Actions
                          className="mt-2">
                        <Rating
                            maxRating={5}
                            size='large'
                            rating={review.score}
                            clearable
                        />
                        <Link to={"/review/" + review.reviewId}>
                          <Comment.Action
                              className="ml-2"
                          >Edit</Comment.Action>
                        </Link>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
              ))}
            </div>
            <div className="mt-5">
              <h2>Add a Review</h2>
              <Form>
                <Dropdown
                    placeholder='Select User'
                    fluid
                    selection
                    options={customers.map(({id, firstName, lastName}) => ({
                      value: id,
                      text: firstName + " " + lastName
                    }))}
                    className="mt-2"
                    onChange = {(e,{value}) => this.retrieveCustomerByID(value)}
                />
                <Form.TextArea
                    value={comment}
                    onChange={(e) => this.onChangeComment(e)}
                />
                <Rating
                    maxRating={5}
                    size='large'
                    rating={score}
                    clearable
                    onRate={(e, { rating }) => this.onChangeScore(rating)}
                />
                <Form.Button
                    className = "mt-3"
                    content='Add'
                    labelPosition='right'
                    icon='edit'
                    primary
                    onClick={() => this.saveReview()}
                />
              </Form>
            </div>
          </Comment.Group>
        </div>
    )
  }

}

export default ReviewList;