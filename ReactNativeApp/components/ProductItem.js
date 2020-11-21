import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

function ProductItem(){
    useEffect(() => {
        console.log('Render--UseEffect');
    }, []);
    return (
        <View>
            <Text>ProductItems</Text>
        </View>
    );
    
}
export default ProductItem;