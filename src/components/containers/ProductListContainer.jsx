import { connect } from 'react-redux';
import ProductList from './../presentational/product/ProductList';
import React from 'react';

class ProductListContainer extends React.Component {
    render() {
        return (
                <ProductList {...this.props}/>
        )
    }
}

const mapStateToProps = state => ({
    products: state.productsComponent.products,
    clicks: state.productsComponent.clicks
});

export default connect(mapStateToProps)(ProductListContainer);
