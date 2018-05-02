import store from "../store";

function addProduct(values) {
    return () => store.dispatch({
        type: 'ADD_PRODUCT',
        id: values.id,
        name: values.name,
        description: values.description
    });
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

export default
{
    addQuantity,
    removeQuantity,
    addProduct
}