import React, { Component } from 'react';
import Product from './Product';
import productHelper from '../helpers/product-helper';

class ProductList extends Component {

    render() {
        return (
            <section>
                <h2>List of products</h2>
                <ul>
                    {productHelper.getProducts().map((product,i) => (<li key={i}><Product id={product.id} name={product.name}/></li>))}
                </ul>
                <div>Global quantity = [{productHelper.getGlobalQuantity()}]</div>
                <div>Global clicks = [{productHelper.getTotalNumberOfClicks()}]</div>
            </section>
        )
    }
}
export default ProductList;
