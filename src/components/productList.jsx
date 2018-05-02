import React, { Component } from 'react';
import Product from './Product';
import AddProductForm from './../forms/AddProductForm';
import productHelper from '../helpers/product-helper';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ProductList extends Component {

    render() {
        return (
                <section>
                    <h2>List of products</h2>
                    <ul>
                        {productHelper.getProducts().map((product,i) => (<li key={i}><Product id={product.id} name={product.name}/></li>))}
                    </ul>
                    <h2>Simple Form</h2>
                    <AddProductForm onSubmit={productHelper.addProduct} handleSubmit111={() => console.Log('asmi')}/>
                    <Link to={"/products/add"}>Add</Link>
                    <div>Global quantity = [{productHelper.getGlobalQuantity(this.props.products)}]</div>
                    <div>Global clicks = [{this.props.clicks}]</div>
                </section>
        )
    }
}

const mapStateToProps = state => (
        {
            products: state.productsComponent.products,
            clicks: state.productsComponent.clicks
        }
);

export default connect(mapStateToProps)(ProductList);
