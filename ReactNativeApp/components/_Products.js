import React, {useState} from 'react';
import { View, Text, Image, ScrollView, Button } from 'react-native';
import ProductItem from './ProductItem';

function Products({ productList, title, changeTitle, supplier, callSheila }) {

    const [childTitle, setChildTitle] = useState('Le Toan');
    const [myAge, setMyAge] = useState(0);
    function renderProducts(items) {
        const callTitle = (product) => {
            callSheila(product);
        }
  
        return (
            <View >
                <Text>{title}</Text>
                <Text>My Name: {childTitle}</Text>
                <Text>My Age: {myAge}</Text>
                <Button title="pass to Parent" onPress={() => changeTitle(childTitle)}/>
                <Button title="Change my name" onPress={() => setChildTitle('Sheila')}/>
                <Button title="Up My Age" onPress={() => setMyAge(myAge =>myAge+2)}/>
                {
                    items.map((product) => {
                        return <ProductItem callTitle={callTitle} mySupplier={supplier} productItem={product} key={product.id} />
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