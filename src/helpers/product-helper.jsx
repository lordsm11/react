import store from "../store";

function findProduct(products, index) {
    return products.filter((p) => p.id === index);
}

function getGlobalQuantity(products) {
    return products.map((a) => (a.quantity)).reduce((a, b) => (a + b), 0);
}

function getQuantity(products, id) {
    let product = findProduct(products, id);
    return product.length > 0 ? product[0].quantity : 0;
}

function getTotalNumberOfClicks  () {
    return store.getState().productsComponent.clicks;
}

function addProduct(state, id, name, description) {
    console.log(id);
    console.log(name);
    console.log(description);
    let newProducts = state.products.slice();
    newProducts.splice(id, 0, {id: id, name: name, description:description, quantity: 0});
    return {...state,  products: newProducts};
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

function getProducts() {
    return [
        {
            id: 0,
            name: 'product0',
            description: 'description of the product0'
        },
        {
            id: 1,
            name: 'product1',
            description: 'description of the product1'
        },
        {
            id: 2,
            name: 'product2',
            description: 'description of the product2'
        },
        {
            id: 3,
            name: 'product3',
            description: 'description of the product3'
        },
        {
            id: 4,
            name: 'product4',
            description: 'description of the product4'
        },
        {
            id: 5,
            name: 'product5',
            description: 'description of the product5'
        },
    ];
}

export default
{
    findProduct,
    getGlobalQuantity,
    getQuantity,
    updateQuantity,
    getTotalNumberOfClicks,
    getProducts,
    addProduct
}