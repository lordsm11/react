import productHelper from '../helpers/product-helper';

const initState = {clicks: 0, products: []};

export default (state = initState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return updateQuantity(state, action.index, 1);
        case 'REMOVE_PRODUCT':
            return updateQuantity(state, action.index, -1);
        default:
            return state;
    }
};

function updateQuantity(state, id, threshold) {
    let product = productHelper.findProduct(state.products, id);
    let exist = product.length > 0;
    let newQuantity = exist ? product[0].quantity + threshold : threshold;
    let newClicks = state.clicks + 1;
    if(newQuantity < 0) {
        return {...state, clicks: newClicks };
    }

    if (!exist) {
        let newProducts = state.products.slice();
        newProducts.splice(id, 0, {id: id, quantity: 1});
        return { products: newProducts, clicks: newClicks};
    }


    let newState = state.products.map((item, index) => {
        if (item.id !== id) {
            return item;
        }
        return {...item, quantity: item.quantity + threshold };
    });

    return { products: newState, clicks: newClicks};

}
