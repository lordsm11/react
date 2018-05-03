import store from "../redux/store";

function addProduct() {
    return (dispatch, getState) => {
        const values = getState().form.addProductForm.values;
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

function addQuantity(id) {
    return () => store.dispatch({
        type: 'ADD_QUANTITY',
        index: id
    });
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
    toggleDescription
}