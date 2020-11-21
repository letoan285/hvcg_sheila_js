import React from 'react';
import {View, Text} from 'react-native';
import ProductItem from './ProductItem';

class Products extends React.Component {
    render(){
        console.log('Render -- child');
        return (
            <View>
                <Text>Products</Text>
                <Text>{this.props.title}</Text>
                <ProductItem />
            </View>
        );
    }
}
export default Products;