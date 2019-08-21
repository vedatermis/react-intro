import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

class FormDemo2 extends Component {
  state = {
    email: "",
    password: "",
    city: "",
    description: ""
  };

  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    alertify.success(this.state.email + " Kayıt Tamamlandı");
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              onChange={this.handleChange}
              type="email"
              name="email"
              id="email"
              placeholder="please enter your email"
            />
          </FormGroup>

          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              onChange={this.handleChange}
              type="password"
              name="password"
              id="password"
              placeholder="please enter your password"
            />
          </FormGroup>

          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              onChange={this.handleChange}
              type="textarea"
              name="description"
              id="description"
              placeholder="please enter your description"
            />
          </FormGroup>

          <FormGroup>
            <Label for="city">City</Label>
            <Input type="select" name="city" id="city" onChange={this.handleChange}>
                <option>Ankara</option>
                <option>İstanbul</option>
                <option>İzmir</option>
                <option>Bursa</option>
                <option>Yalova</option>
            </Input>
          </FormGroup>

          <Button type="submit">Save</Button>
        </Form>
      </div>
    );
  }
}

export default FormDemo2;
