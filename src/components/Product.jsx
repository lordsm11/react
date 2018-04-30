import React, { Component } from 'react';
import productHelper from '../helpers/product-helper';
import { Link } from 'react-router-dom';

class Product extends Component {

    render() {
        const id = this.props.id;
        const name = this.props.name;
        return (
            <section>
                <Link to={"/product/"+id} key={id}>{name}</Link>
                <span> : [Q={productHelper.getQuantity(id)}]   </span>
                <button onClick={productHelper.addQuantity(id)}>+</button>
                <button onClick={productHelper.removeQuantity(id)}>-</button>
            </section>
        )
    }
}
export default Product;
