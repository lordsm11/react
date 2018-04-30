import React, { Component } from 'react';
import storeHelper from '../helpers/store-helper';

class AddProduct extends Component {

    render() {
        return (
            <form onSubmit={ (e) => {
                storeHelper.addProduct(e);
             }}>
                <label>Id:<input type="text" name="id" /></label>
                <label>Name:<input type="text" name="name" /></label>
                <label>description:<input type="text" name="description" /></label>
                <input type="submit" value="Add" />
            </form>
        )
    }
}
export default AddProduct;
