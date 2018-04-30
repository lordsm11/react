import productHelper from '../helpers/product-helper';

const initState = {clicks: 0, products: []};

export default (state = initState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return productHelper.updateQuantity(state, action.index, 1);
        case 'REMOVE_PRODUCT':
            return productHelper.updateQuantity(state, action.index, -1);
        default:
            return state;
    }
};

