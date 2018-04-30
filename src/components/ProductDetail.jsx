import React, { Component } from 'react';

class ProductDetail extends Component {

    render() {
        const id = this.props.match.params.id;
        return (
            <section>
                <span>details are {id} </span>
            </section>
        )
    }
}
export default ProductDetail;
