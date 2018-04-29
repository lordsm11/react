import React, { Component } from 'react';
import Product from './components/Product';
import store from './store';
import { Link } from 'react-router';

class App extends Component {
    getGlobalQuantity() {
        return store.getState().productsComponent.products.map((a) => (a.quantity)).reduce((a, b) => (a + b), 0);
    }

    render() {
        const products = [
            {
                id:0,
                name:'product0'
            },
            {
                id:1,
                name:'product1'
            },
            {
                id:2,
                name:'product2'
            },
            {
                id:3,
                name:'product3'
            },
            {
                id:4,
                name:'product4'
            },
            {
                id:5,
                name:'product5'
            },
        ];
        return (
                <section>
                  <h2>LIst of products</h2>
                  <ul>
                      {
                          products.map(
                              (product) => (<li>{product.name}</li>)
                          )
                      }
                      {products.map((product) => (<li><Product id={product.id} name={product.name}/></li>))}
                  </ul>
                  Global quantity is : {this.getGlobalQuantity()}
                  Global clicks is : {store.getState().productsComponent.clicks}
                </section>
        )
    }
}

export default App;
