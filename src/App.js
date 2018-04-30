import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from "./components/about";
import ProductList from "./components/productList";
import ProductDetail from "./components/ProductDetail";
import AddProduct from "./components/AddProduct";
import Home from "./components/home";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">List of products</div>
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav">
                                    <li><Link to="/home">Home</Link></li>
                                    <li><Link to="/products">Products</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Switch>
                        <Route exact path='/home' component={Home}/>
                        <Route exact path='/products' component={ProductList}/>
                        <Route exact path='/products/add' component={AddProduct}/>
                        <Route exact path="/products/:id" component={ProductDetail}/>
                        <Route exact path="/about" component={About}/>
                        <Route component={Home}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
export default App;
