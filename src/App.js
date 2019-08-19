import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {

  state = {
    currentCategory: "",
    products: [],
    cart: []
  };

  componentDidMount() {
    this.getProducts();
  }

  setSelectedCategory = category => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = categoryId => {
    let url = "http://localhost:3000/products";

    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ products: data });
      });
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id);

    if (addedItem) {
      addedItem.quantity += 1;
    } else
    {
      newCart.push({product: product, quantity:1});
    }
   
    this.setState({cart: newCart});
  }

  render() {
    return (
      <div>
        <Container>
          <Navi cart = {this.state.cart}/>

          <Row>
            <Col xs="3">
              <CategoryList
                changeCategoryEvent={this.setSelectedCategory}
                currentCategory={this.state.currentCategory}
              />
            </Col>

            <Col xs="9">
              <ProductList
                products={this.state.products}
                addToCart={this.addToCart}
                selectedCategory={this.state.currentCategory}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
