import productHelper from '../helpers/product-helper';

const initState = {clicks: 0, products: []};

export default (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_QUANTITY':
            return productHelper.updateQuantity(state, action.index, 1);
        case 'REMOVE_QUANTITY':
            return productHelper.updateQuantity(state, action.index, -1);
        case 'ADD_PRODUCT':
            return productHelper.addProduct(state, action.id, action.name, action.description);
        default:
            return state;
    }
};

