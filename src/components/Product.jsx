import React, { Component } from 'react';
import productHelper from '../helpers/product-helper';

class Product extends Component {

    render() {
        return (
                <section>
                    <span>Product component : {this.props.name} : quantity : {productHelper.getQuantity(this.props.id)}</span>
                    <button onClick={productHelper.addQuantity(this.props.id)}>Add</button>
                    <button onClick={productHelper.removeQuantity(this.props.id)}>Remove</button>
                </section>
        )
    }
}
export default Product;
