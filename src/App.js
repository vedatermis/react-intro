import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {

  state = {
    currentCategory: ""
  }

  setSelectedCategory = (category) => {
    this.setState({currentCategory: category.categoryName});
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>

          <Row>
            <Col xs="3">
              <CategoryList changeCategoryEvent = { this.setSelectedCategory }/>
            </Col>

            <Col xs="9">
              <ProductList selectedCategory = { this.state.currentCategory } />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
