import React, {Component} from 'react'
import CustomerService from "../service/CustomerService";
import { Link } from "react-router-dom";
import {Input, Button, Grid, Header} from 'semantic-ui-react'

class CustomerList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveCustomers = this.retrieveCustomers.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveCustomer = this.setActiveCustomer.bind(this);
    this.removeAllCustomers = this.removeAllCustomers.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      customers: [],
      currentCustomer : null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveCustomers();
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.retrieveCustomers()
    }
  }

  onChangeSearchName(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveCustomers() {
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

  refreshList() {
    this.retrieveCustomers();
    this.setState({
      currentCustomer: null,
      currentIndex: -1
    })
  }

  setActiveCustomer(customer, index) {
    this.setState({
      currentCustomer: customer,
      currentIndex: index
    })
  }

  removeAllCustomers() {
    //TODO Create a REST API in Springboot that remove all events and implement AXIOS method
  }

  searchTitle() {
    //TODO Create a REST API in SpingBoot that query the text by title and implement AXIOS method
    console.log(this.state.searchTitle);
    CustomerService.findByName(this.state.searchTitle)
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


  render() {
    const {searchTitle, customers, currentCustomer, currentIndex } = this.state;

    return (
        <Grid container style={{ padding: '0em 0em' }}>
          <Grid.Row>
            <Grid.Column>
              <Header as='h1' dividing>
                Finding List of Customer
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Input
                  fluid
                  type='text'
                  placeholder='Search Customer...'
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
              <Link to="/customer/create">Sign Up</Link>
              <div className="ui items">
                {customers &&
                this.state.customers.map((customer, index) => (
                    <li
                        className={
                          "list-group-item " +
                          (index === currentIndex ? "active" : "")
                        }
                        onClick={() => this.setActiveCustomer(customer, index)}
                        key={index}
                    ><h4>{customer.firstName}  {customer.lastName}</h4>
                    </li>
                ))}
              </div>
            </Grid.Column>
            <Grid.Column width={6}>
              <div>
                {currentCustomer ? (
                    <div>
                      <h3>Customer Information:</h3>
                      <div>
                        <label>
                          <strong>Customer Name:</strong>
                        </label>{" "}
                        {currentCustomer.firstName}  {currentCustomer.lastName}
                      </div>
                      <div>
                        <label>
                          <strong>Email:</strong>
                        </label>{" "}
                        {currentCustomer.email}
                      </div>
                      <div>
                        <label>
                          <strong>Gender:</strong>
                        </label>{" "}
                        {currentCustomer.gender}
                      </div>
                      <div>
                        <label>
                          <strong>Date of Birth:</strong>
                        </label>{" "}
                        {currentCustomer.dateOfBirth}
                      </div>
                      <div className= "mt-2">
                        <Button
                            as={Link} to = {"/customer/find/" + currentCustomer.id}
                        >
                          Update
                        </Button>
                      </div>
                    </div>
                ) : (
                    <div>
                      <br />
                      <p>Please click on a Customer to read about the customer...</p>
                    </div>
                )}
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    )
  }


}

export default CustomerList;
