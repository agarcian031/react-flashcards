import React, { Component } from 'react'
import {Form} from 'semantic-ui-react';

class FlashcardForm extends Component {
  state = {front: "", back: ""}

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value, });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.add(this.state);
    this.setState({ front: "", back: "", });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
      <Form.Group widths="equal">
        <Form.Field inline fluid>
          <label>Question:</label>
          <input placeholder="Question" 
          name="front"
          value={this.state.front}
          onChange={this.handleChange}/>
        </Form.Field> 
        <Form.Field inline fluid>
          <label>Answer:</label>
          <input placeholder="Answer" 
          name="back"
          value={this.state.back}
          onChange={this.handleChange}/>
        </Form.Field> 
        <Form.Button color="green" fluid>Submit</Form.Button>
      </Form.Group>
    </Form>
    )
  }
}

export default FlashcardForm; 