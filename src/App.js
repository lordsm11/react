import React, { Component } from 'react';
import ProductList from './components/productList';

class App extends Component {

    render() {
        return (
            <section>
                <h1>The Global App Component</h1>
                <ProductList/>
            </section>
        )
    }
}

export default App;