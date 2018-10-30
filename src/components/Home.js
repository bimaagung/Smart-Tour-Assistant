//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Text } from 'native-base';


// create a component
class Home extends Component {  
    state={
        isReady: false
      }
    
      async componentWillMount() {
      await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      });
      this.setState({isReady:true})
    } 

    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
          }
        return (

            <View style={styles.container}>
                <View style={styles.header}>
                    <Text>Smart Tour Assistant</Text>
                </View> 
            </View>
        );
    }
}


// define your styles
const styles = StyleSheet.create({

    header: {
        padding: 30,
        backgroundColor:'#ffffff',
        alignItems: 'center',
        

    },
});
  
//make this component available to the app
export default Home;
