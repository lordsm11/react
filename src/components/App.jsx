import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from "./presentational/common/about";
import ProductListContainer from "./containers/ProductListContainer";
import AddProductFormContainer from "./containers/AddProductFormContainer";
import ProductDetail from "./presentational/product/ProductDetail";
import Home from "./presentational/common/home";
import Groups from "./presentational/foot/Groups";
import Matchs from "./presentational/foot/Matchs";
import Teams from "./presentational/foot/Teams";

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
                                    <li><Link to="/groups">Groups</Link></li>
                                    <li><Link to="/teams">Teams</Link></li>
                                    <li><Link to="/products">Products</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Switch>
                        <Route exact path='/home' component={Home}/>
                        <Route exact path='/groups' component={Groups}/>
                        <Route exact path="/groups/:groupId" render={(props) => <Matchs type="group" {...props} /> } />
                        <Route exact path='/teams' component={Teams}/>
                        <Route exact path="/teams/:teamId" render={(props) => <Matchs type="team" {...props} /> } />
                        <Route exact path='/products' component={ProductListContainer}/>
                        <Route exact path="/products/add" component={AddProductFormContainer}/>
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
