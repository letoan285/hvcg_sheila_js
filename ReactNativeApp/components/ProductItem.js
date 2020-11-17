import React from 'react';
import {View, Image, Text} from 'react-native';
const ProductItem = ({productItem}) => {
    return (
        <View style={{ backgroundColor: 'grey'}}>
            <Text> This Is Product List </Text>
            <Image style={{ width: 100, height: 100 }} source={{ uri: productItem.uri }} />
        </View>
    );
}

export default ProductItem;