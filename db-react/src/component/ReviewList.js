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
    this.refresh = this.refresh.bind(this);

    this.state = {
      reviewid : null,
      reviews: [],
      customers: [],
      score: 0,
      comment: "",
      currentUser: [],
      message: "",
      currentEvent : null,
      updated : false
    }
  }

  componentDidMount() {
    this.retrieveReview(this.props.match.params.id);
    this.retrieveEvent(this.props.match.params.id);
    this.retrieveCustomerByID(this.props.match.params.cid);
    console.log(this.props.match.params.cid);
    this.retreiveCustomer();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.state.updated){
      this.refresh();
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

  refresh() {
    this.retrieveReview(this.props.match.params.id);
    this.retrieveEvent(this.props.match.params.id);
    this.retreiveCustomer();
    this.setState({
      comment : "",
      score : 0,
      currentUser : [],
      updated : false
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
    console.log(this.state.currentUser);
    var newReview = {
      reviewid : null,
      comments: this.state.comment,
      score: this.state.score,
      customer: this.state.currentUser,
      event: this.state.currentEvent
    };

    ReviewService.create(newReview)
    .then(() => {
      this.setState({
        updated: true
      });
    })
  }



  render() {
    const {reviews, customers, score, comment, currentUser} = this.state;
    console.log("Render" + customers);
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
                        <Link to={"/review/" + review.reviewId + "/event/"
                        + this.props.match.params.id + "/customer/" + review.customer.id}>
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
              <Form>{currentUser &&
                <Dropdown
                    placeholder='Select User'
                    fluid
                    selection
                    options={customers.map(({id, firstName, lastName}) => ({
                      value: id,
                      text: firstName + " " + lastName
                    }))}
                    value = {currentUser.id}
                    className="mt-2"
                    onChange = {(e,{value}) => this.retrieveCustomerByID(value)}
                />}
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
                <Form.Button
                    className = "mt-3"
                    as={Link} to = {"/event/find/" + this.props.match.params.id}
                >Back to Event</Form.Button>
                {this.props.match.params.cid &&
                    <div>
                <Form.Button
                    className = "mt-3"
                    as={Link} to = {"/customer/find/" + this.props.match.params.cid}
                >Back to Customer</Form.Button>
                    </div>}
              </Form>
            </div>
          </Comment.Group>
        </div>
    )
  }

}

export default ReviewList;