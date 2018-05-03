import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import actions from '../../../helpers/actions';
import { Link } from 'react-router-dom';

class AddProductForm extends Component {

    render() {
        const { handleSubmit, pristine, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <h2>Add a product</h2>
                <div>
                    <label>Id</label>
                    <div><Field name="id" component="input" type="text" placeholder="id"/></div>
                </div>
                <div>
                    <label>Name</label>
                    <div><Field name="name" component="input" type="text" placeholder="name"/></div>
                </div>
                <div>
                    <label>Description</label>
                    <div><Field name="description" component="input" type="text" placeholder="description"/></div>
                </div>
                <br/>
                <div>
                    <button type="submit" disabled={pristine || submitting}>Add product</button>
                </div>
                <br/>
                <Link to={"/products"}>Return</Link>
            </form>
        );
    }
}

const onSubmit = (values, dispatch) => {
    dispatch(actions.addProduct());
};

export default reduxForm({
    form: 'addProductForm',
    onSubmit
})(AddProductForm);


