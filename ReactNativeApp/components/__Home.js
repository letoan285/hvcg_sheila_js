import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import Products from './Products';

// props==property
// state = data || private property

class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            title: 'New Product List',
            price: 0,
            supplier: 'Apple 999',
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

    changeTitle = (title) => {
        this.setState(prevState => {
            return {
                ...prevState,
                title: title
            }
        });
        // this.changeParentTitle('');
    }

    changeParentTitle = (name) => {
        this.setState(prevState => {
            return {
                ...prevState,
                title: name
            }
        });
    }

    callSheila = (product) => {
        this.setState(prevState => {
            return {
                ...prevState,
                title: product.name,
                price: product.price
            }
        });
    }

    render(){
        const newTitle = 'MY Newest title';
        const { products, title, supplier } = this.state;

        return (
            <>
                <View  style={{backgroundColor:'blue', height: '100%'}}>

                    <View style={{alignItems: 'center', justifyContent: 'center', fontSize: 20, color: 'red', height: 60}}>  
                        <Text style={{color: '#fff'}}>{this.state.title}</Text>
                        <Text style={{color: 'red'}}>Price: {this.state.price}</Text>
                    </View>
                    <Button title="Change Title" onPress={() => this.changeTitle(newTitle)}/>
                    <Products callSheila={this.callSheila} supplier={supplier} changeTitle={this.changeParentTitle} productList={products} title={title} />

                </View>

            </>
        );
    }
}

export default Home;
// life cycle