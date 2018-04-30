import React, { Component } from 'react';
import productHelper from '../helpers/product-helper';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


class Naviguation extends Component {

    render() {
        return (
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
            </div>
        )
    }
}
export default Naviguation;
