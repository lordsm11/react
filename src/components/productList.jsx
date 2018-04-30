import React, { Component } from 'react';
import Product from './Product';
import productHelper from '../helpers/product-helper';

class ProductList extends Component {

    render() {
        return (
            <section>
                <h2>LIst of products</h2>
                <ul>
                    {productHelper.getProducts().map((product,i) => (<li><Product id={product.id} name={product.name} key={i}/></li>))}
                </ul>
                Global quantity is : {productHelper.getGlobalQuantity()}
                Global clicks is : {productHelper.getTotalNumberOfClicks()}
            </section>
        )
    }
}
export default ProductList;
