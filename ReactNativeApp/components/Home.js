import React from 'react';
import {View, Text, Button} from 'react-native';
import Products from './Products';

class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            name: 'Home',
            title: 'Home Page'
        }
        console.log('Constructor =='); 
    }
    componentDidMount(){
        console.log('componentDidMount ==');
        // this.setState({title: 'New Title'});
    }
    componentDidUpdate(){
        console.log('componentDidUpdate ==');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount ==');
    }
    render(){
        console.log('Render ==');
        // this.setState({title: 'New Title'});
        // this.state.name ='aoighowaihgoiwe'
        return (
            <View>
                <Text>{this.state.name}</Text>
                <Button title="change State"  onPress={() => this.setState({name: 'My Home'})}/>
                <Products title={this.state.title} />
            </View>
        );
    }
}
export default Home;
// constructor
// giai doan 1, sinh ra. --> mounting
// giai doan lon len, thay doi --> updating
// giai doan chet di --> unmounting