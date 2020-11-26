import React from 'react';
import './App.css';
import Button from './components/Button';
import { products } from './constants/product';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';

import Header from './components/Header';
import ProductList from './components/ProductList';
import NotFound from './components/NotFound';
// dry
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
  }
  componentDidMount() {
    this.setState(prevState => {
      return {
        ...prevState,
        products: products
      }
    })
  }

  render() {

    if (!this.state.products.length > 0) {
      return <div style={{ background: 'black', color: 'white', width: '100%', height: '700px', top: 0, left: 0 }}>Loading ...</div>;
    }


    return (
      <BrowserRouter>

        <Header />
        <Switch>
          <Route path="/" exact render={() => <HomePage />} />
          <Route path="/products" render={() => <ProductList />} />
          <Route render={() => <NotFound />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

