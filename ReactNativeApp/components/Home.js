import React from 'react';
import {View, Text, Image} from 'react-native';
import Products from './Products';

// props==property
// state = data || private property

class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            products: [
                {id: 1, name: 'Samsung galaxy', price: 1250, uri: 'https://cdn.tgdd.vn/Products/Images/42/213027/samsung-galaxy-s11-plus-600x600-fix-600x600.jpg'},
                {id: 2, name: 'Iphone 10', price: 1450, uri: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-red-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144763'},
                {id: 3, name: 'Iphone 11', price: 1950, uri: 'https://cdn.tgdd.vn/Products/Images/42/213027/samsung-galaxy-s11-plus-600x600-fix-600x600.jpg'},
                {id: 4, name: 'Iphone 12', price: 1950, uri: 'https://cdn.tgdd.vn/Products/Images/42/213027/samsung-galaxy-s11-plus-600x600-fix-600x600.jpg'},
                {id: 5, name: 'Iphone 13', price: 1950, uri: 'https://cdn.tgdd.vn/Products/Images/42/213027/samsung-galaxy-s11-plus-600x600-fix-600x600.jpg'},
                {id: 6, name: 'Oppo', price: 350, uri: 'https://cdn.tgdd.vn/Products/Images/42/220654/oppo-a92-tim-600x600-1-2-600x600.jpg'},
            ]
        }
    }

    render(){
        return (
            <>
                <View  style={{backgroundColor:'blue', height: '100%'}}>

                    <Text style={{fontSize: 20, color: 'red'}}> Product List </Text> 
                    <Products productList={this.state.products}/>

                </View>

            </>
        );
    }
}

export default Home;