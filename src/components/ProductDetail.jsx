import React, { Component } from 'react';
import productHelper from '../helpers/product-helper';

class ProductDetail extends Component {

    render() {
        const id = Number(this.props.match.params.id);
        const product = productHelper.findProduct(id);
        return (
            <section>
                <span>{id} : {product[0].description}</span>
            </section>
        )
    }
}
export default ProductDetail;
