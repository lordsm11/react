import { connect } from 'react-redux';
import Product from './../presentational/product/Product';
import React from 'react';

class ProductContainer extends React.Component {
    render() {
        return (
             <Product {...this.props}/>
        )
    }
}

const mapStateToProps = state => ({
    products: state.productsComponent.products
});

export default connect(mapStateToProps)(ProductContainer);