import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import ProductItem from './ProductItem';

function Products({ productList }) {

    function renderProducts(items) {

        return (
            <View >
                {
                    items.map((product) => {
                        return <ProductItem productItem={product} key={product.id} />
                    })
                }
            </View>
        );
    }
    return (
        <ScrollView style={{ backgroundColor: 'coral', height: 80, marginBottom: 5 }}>
            {renderProducts(productList)}
        </ScrollView>
    );
}

export default Products;