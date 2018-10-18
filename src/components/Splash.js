//import liraries
import React, { Component } from 'react';
import { View, ActivityIndicator,Text, StyleSheet } from 'react-native';

// create a component
class Splash extends Component {
    componentDidMount(){
        this.props.navigation.navigate('Home');
    }
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size='large' color='#fff' />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1af801',
    },
});

//make this component available to the app
export default Splash;
