function findProduct(products, index) {
    return products.filter((p) => p.id === index);
}

export default { findProduct }