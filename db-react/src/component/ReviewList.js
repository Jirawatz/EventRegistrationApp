import React, {Component} from 'react'
import ReviewService from "../service/ReviewService";
import { Link } from "react-router-dom";
import {Input, Button, Grid, Header, Rating} from 'semantic-ui-react'

class ReviewList extends Component {
  constructor(props) {
    super(props);
    this.retrieveReview = this.retrieveReview.bind(this);

    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    this.retrieveReview(this.props.match.params.id);
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


  render() {
    const { reviews } = this.state;

    return (
        <div>
        <Header as='h1' dividing>
          Review
        </Header>
        <div className="ui-items">
          {reviews && this.state.reviews.map((review) => (
              <li className={"list-group-item"}>
                <Rating
                    maxRating={5}
                    size='large'
                    rating={review.score}
                    clearable
                />
                <p>{review.comments}</p>
                <Button>Edit</Button>
              </li>
          ))}
        </div>
        </div>
    )
  }

}

export default ReviewList;