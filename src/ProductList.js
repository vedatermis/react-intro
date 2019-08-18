import React, { Component } from 'react';

export default class ProductList extends Component {
    render() {
        return (
            <div>
            <h1>ProductList - { this.props.selectedCategory }</h1>
            </div>
        )
    }
};