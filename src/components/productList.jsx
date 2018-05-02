import React, { Component } from 'react';
import Product from './Product';
import AddProductForm from './../forms/AddProductForm';
import productHelper from '../helpers/product-helper';
import { connect } from 'react-redux';

class ProductList extends Component {

    render() {
        return (
            <section>
                <h2>List of products</h2>
                <ul>
                    {this.props.products.map((product,i) => (<li key={i}><Product id={product.id} name={product.name}/></li>))}
                </ul>
                <div>Global quantity = [{productHelper.getGlobalQuantity(this.props.products)}]</div>
                <div>Global clicks = [{this.props.clicks}]</div>
                <h2>Add a product</h2>
                <AddProductForm onSubmit={productHelper.addProduct}/>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    products: state.productsComponent.products,
    clicks: state.productsComponent.clicks
});

export default connect(mapStateToProps)(ProductList);
