import store from "../redux/store";
import { SubmissionError } from 'redux-form'
import productHelper from './productHelper';
import footService from './footService';

function addProduct() {
    return (dispatch, getState) => {
        const values = getState().form.addProductForm.values;
        if (productHelper.isIdExist(Number(values.id))) {
            throw new SubmissionError({
                id: 'please correct id!',
                _error: 'Id already exist!'
            })
        }
        const product = {
            id: values.id,
            name: values.name,
            description: values.description,
            showDescription: true
        };
        values.id = '';
        values.name = '';
        values.description = '';

        dispatch({
            type: 'ADD_PRODUCT',
            product,
        });
    }
}


function removeProduct(id) {
    return () => store.dispatch({
        type: 'REMOVE_PRODUCT',
        index: id
    });
}

function addQuantity(id) {
    return () => store.dispatch({
        type: 'ADD_QUANTITY',
        index: id
    });
}

function editScore(name, result) {
    return footService.addScores([{name,result}]);
}



function removeQuantity(id) {
    return () => store.dispatch({
        type: 'REMOVE_QUANTITY',
        index: id
    });
}

function toggleDescription(id) {
    return () => store.dispatch({
        type: 'TOGGLE_DESCRIPTION',
        index: id
    });
}

export default
{
    addQuantity,
    removeQuantity,
    addProduct,
    removeProduct,
    toggleDescription,
    editScore
}