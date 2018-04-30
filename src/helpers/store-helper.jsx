import store from "../store";

function addProduct(e) {
    e.preventDefault();
    e.stopPropagation();
    const data = new FormData(e.target);
    return () => store.dispatch({
        type: 'ADD_PRODUCT',
        id: data.get('id'),
        name: data.get('name'),
        description: data.get('description')
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