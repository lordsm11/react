import React, { Component } from 'react';
import productHelper from '../helpers/product-helper';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


class Product extends Component {

    render() {
        return (
            <BrowserRouter>
                <section>
                    <span>Product component : {this.props.name} : quantity : {productHelper.getQuantity(this.props.id)}</span>
                    <Link to={"/products/"+this.props.id} key={this.props.id}>{this.props.name}</Link>
                    <button onClick={productHelper.addQuantity(this.props.id)}>Add</button>
                    <button onClick={productHelper.removeQuantity(this.props.id)}>Remove</button>
                </section>
            </BrowserRouter>
        )
    }
}
export default Product;
