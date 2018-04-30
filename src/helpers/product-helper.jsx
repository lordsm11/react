import store from "../store";

function findProduct(products, index) {
    return products.filter((p) => p.id === index);
}

function getGlobalQuantity() {
    return store.getState().productsComponent.products.map((a) => (a.quantity)).reduce((a, b) => (a + b), 0);
}

function getQuantity(id) {
    let product = findProduct(store.getState().productsComponent.products, id);
    return product.length > 0 ? product[0].quantity : 0;
}

function addQuantity(id) {
    return () => store.dispatch({
        type: 'ADD_PRODUCT',
        index: id
    });
}

function removeQuantity(id) {
    return () => store.dispatch({
        type: 'REMOVE_PRODUCT',
        index: id
    });
}

function updateQuantity(state, id, threshold) {
    let product = findProduct(state.products, id);
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

export default
{
    getGlobalQuantity,
    getQuantity,
    addQuantity,
    removeQuantity,
    updateQuantity
}