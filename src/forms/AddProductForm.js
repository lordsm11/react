import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import action from '../helpers/actions';

class AddProductForm extends Component {

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit}>
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
                    <button type="submit" disabled={pristine || submitting} onClick={this.props.addProduct}>Submit</button>
                </div>
                <br/>
            </form>
        );
    }
}

AddProductForm = reduxForm({ form: 'addProductForm' })(AddProductForm);

AddProductForm = connect(
        state => ({
            state: state
        }),
        {
            addProduct: action.addProduct
        }
        )(AddProductForm);

export default AddProductForm;


