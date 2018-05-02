import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

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
                    <div>
                        <button type="submit" disabled={pristine || submitting}>Submit</button>
                        <button type="button" disabled={pristine || submitting} onClick={reset}>
                            Clear Values
                        </button>
                    </div>
                </form>
        );
    }
};


AddProductForm = reduxForm({ form: 'add-product-form' })(AddProductForm);

// State connector
AddProductForm = connect(
        state => ({
            initialValues: state
        }), //MapStatetoProps
        { load: data => ({ type: 'LOADASMI', data }) }
        )(AddProductForm);

export default AddProductForm;



