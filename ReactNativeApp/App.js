import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Home from './components/Home';



class App extends Component {
  constructor(){
    super();
    this.state = {
      name: 'Le Toan',
      product: {id: 1, name: 'Iphone 12', price: 1200}
    }
  }
  getProduct(){
    return {id: 2, name: 'Iphone 14', price: 900}
  }
  render() {
    return (
      <View style={{backgroundColor: '#d3d3d3', height: '100%'}}>
        <Home herName="Hahaha" age={99} whatEver={this.getProduct()}/>
      </View>
    );
  }
}
export default App;