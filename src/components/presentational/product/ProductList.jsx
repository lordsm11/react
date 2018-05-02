import React, { Component } from 'react';
import ProductContainer from './../../containers/ProductContainer';
import AddProductFormContainer from './../../containers/AddProductFormContainer';
import productHelper from '../../../helpers/product-helper';

class ProductList extends Component {

    render() {
        return (
            <section>
                <h2>List of products</h2>
                <ul>
                    {this.props.products.map((product,i) => (<li key={i}><ProductContainer id={product.id} name={product.name}/></li>))}
                </ul>
                <div>Global quantity = [{productHelper.getGlobalQuantity(this.props.products)}]</div>
                <div>Global clicks = [{this.props.clicks}]</div>
                <h2>Add a product</h2>
                <AddProductFormContainer onSubmit={productHelper.addProduct}/>
            </section>
        )
    }
}

export default ProductList;
