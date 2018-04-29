import React, { Component } from 'react';
import Product from './components/Product';
import store from './store';

class App extends Component {
    getGlobalQuantity() {
        return store.getState().productsComponent.products.map((a) => (a.quantity)).reduce((a, b) => (a + b), 0);
    }

    render() {
        let products = [{id:0, name:'product1'},{id:1, name:'product2'},{id:2, name:'product3'}];
        return (
                <section>
                  <h2>This is the main component</h2>
                  <ul>
                      {products.map((product) => (<li><Product id={product.id} name={product.name}/></li>))}
                  </ul>
                  Global quantity is : {this.getGlobalQuantity()}
                  Global clicks is : {store.getState().productsComponent.clicks}
                </section>
        )
    }
}

export default App;
