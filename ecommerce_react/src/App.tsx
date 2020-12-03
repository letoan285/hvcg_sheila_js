import React from 'react';
import './App.css';
import Button from './components/Button';
// import { products } from './constants/product';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';

import Header from './components/Header';
import ProductList from './components/ProductList';
import NotFound from './components/NotFound';
import ProductDetail from './components/ProductDetail';

interface IProps {}
interface IState {
  products: any[]
}
// dry
class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      products: []
    }
  }
  componentDidMount() {
    this.setState(prevState => {
      return {
        ...prevState,
        products: []
      }
    })
  }

  render() {


    return (
      <BrowserRouter>

        <Header />
        <Switch>
          <Route path="/" exact render={() => <HomePage />} />
          <Route path="/products" exact  render={() => <ProductList />} />
          <Route path="/products/:id" render={() => <ProductDetail />} />
          <Route render={() => <NotFound />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

