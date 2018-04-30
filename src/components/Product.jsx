import React, { Component } from 'react';
import productHelper from '../helpers/product-helper';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


class Product extends Component {

    render() {
        return (
            <BrowserRouter>
                <section>
                    <Link to={"/product/"+this.props.id} key={this.props.id}>{this.props.name}</Link>
                    <span> : [Q={productHelper.getQuantity(this.props.id)}]   </span>
                    <button onClick={productHelper.addQuantity(this.props.id)}>+</button>
                    <button onClick={productHelper.removeQuantity(this.props.id)}>-</button>
                </section>
            </BrowserRouter>
        )
    }
}
export default Product;
