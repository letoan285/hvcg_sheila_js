import React from 'react';
import {View, Image, Text, Button} from 'react-native';
const ProductItem = ({productItem, mySupplier, callTitle}) => {
    const testTitle = 'Test Title';
    return (
        <View style={{ backgroundColor: 'grey'}}>
            <Text> {productItem.name} </Text>
            <Image style={{ width: 100, height: 100 }} source={{ uri: productItem.uri }} />
            <Button title="Show Product Name" onPress={() =>callTitle(productItem)}/>
        </View>
    );
}

export default ProductItem;