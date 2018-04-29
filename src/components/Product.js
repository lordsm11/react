import React, { Component } from 'react';
import store from './../store';
import productHelper from '../helpers/product-helper';

class Product extends Component {

    getQuantity() {
        let product = productHelper.findProduct(store.getState().productsComponent.products, this.props.id);
        return product.length > 0 ? product[0].quantity : 0;
    }

    addQuantity() {
        return () => store.dispatch({
            type: 'ADD_PRODUCT',
            index: this.props.id
        });
    }

    removeQuantity() {
        return () => store.dispatch({
            type: 'REMOVE_PRODUCT',
            index: this.props.id
        });
    }

    render() {
        return (
                <section>
                    <span>Product component : {this.props.name} : quantity : {this.getQuantity()}</span>
                    <button onClick={this.addQuantity()}>Add</button>
                    <button onClick={this.removeQuantity()}>Remove</button>
                </section>
        )
    }
}
export default Product;
