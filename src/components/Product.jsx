import React, { Component } from 'react';
import productHelper from '../helpers/product-helper';
import storeHelper from '../helpers/store-helper';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Product extends Component {

    render() {
        const id = this.props.id;
        const name = this.props.name;
        return (
            <section>
                <Link to={"/products/"+id} key={id}>{name}</Link>
                <span> : [Q={productHelper.getQuantity(this.props.products, id)}]   </span>
                <button onClick={storeHelper.addQuantity(id)}>+</button>
                <button onClick={storeHelper.removeQuantity(id)}>-</button>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    products: state.productsComponent.products
});

export default connect(mapStateToProps)(Product);
