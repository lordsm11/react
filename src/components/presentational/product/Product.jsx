import React, { Component } from 'react';
import productHelper from '../../../helpers/product-helper';
import action from '../../../helpers/actions';
import { Link } from 'react-router-dom';
import { intlShape } from 'react-intl';
import {FormattedMessage} from 'react-intl';

class Product extends Component {

    render() {
        const id = this.props.id;
        const product = productHelper.findProduct(id)[0];
        const nameMessage = this.props.intl.formatMessage({ id: 'MASMI.DEMO.NAME' });
        return (
            <section>
                <Link to={"/products/"+id} key={id}>{nameMessage} :: {product.name}</Link>
                {product.showDescription ? ' ['+product.description+'] ' : ''}
                <span> : [Q={productHelper.getQuantity(id)}]   </span>
                <button onClick={action.addQuantity(id)}>+</button>
                <button onClick={action.removeQuantity(id)}>-</button>
                <button onClick={action.toggleDescription(id)}>D</button>
            </section>
        )
    }
}

export default Product;
