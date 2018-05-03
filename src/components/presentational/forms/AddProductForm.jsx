import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import actions from '../../../helpers/actions';
import { Link } from 'react-router-dom';
import validatorHelper from '../../../helpers/validatorHelper';

class AddProductForm extends Component {
    render() {
        const { error, handleSubmit, pristine, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <h2>Add a product</h2>
                {error && <strong>{error}</strong>}
                <Field name="id" type="text"
                       component={validatorHelper.renderField}
                       validate={[validatorHelper.required, validatorHelper.number]}
                       label="Id"
                />
                <Field name="name" type="text"
                       component={validatorHelper.renderField}
                       validate={[validatorHelper.required, validatorHelper.maxLength15]}
                       label="Name"
                />
                <Field name="description" type="text"
                       component={validatorHelper.renderField}
                       validate={[validatorHelper.required]}
                       label="Description"
                />
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


