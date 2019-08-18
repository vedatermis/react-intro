import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: []
  };

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then(response => response.json())
      .then(data => {
        this.setState({ categories: data });
      });
  };

  componentDidMount() {
    this.getCategories();
  }

  render() {
    return (
      <div>
        <h3>CategoryList</h3>
        <ListGroup>
          {this.state.categories.map(category => (
            <ListGroupItem key={category.id} onClick = {() => this.props.changeCategoryEvent(category)}>
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
