import React, { Component } from "react";
import EventsService from "../service/EventsService";

class EventEditor extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeEndDate = this.onChangeEndDate.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeFee = this.onChangeFee.bind(this);
    this.saveEvent = this.saveEvent.bind(this);
    this.removeEvent = this.removeEvent.bind(this);
    this.getEvent = this.getEvent.bind(this);

    this.state = {
      currentEvent: {
        id: null,
        name: "",
        type: "",
        startdate: "",
        enddate: "",
        description: "",
        fee: ""
      }
    };
  }

  componentDidMount() {
    this.getEvent(this.props.match.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentEvent: {
          ...prevState.currentEvent,
          title: title
        }
      };
    });
  }

}

export default EventEditor;