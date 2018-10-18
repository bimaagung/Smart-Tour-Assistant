//import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {Icon, Text} from 'native-base';

// create a component
class BantuanTab extends Component {

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

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-help-circle" style={{color:tintColor, fontSize:24}}/>
        )
    }

    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
          }

        return (
            <View style={styles.container}>
                <Text>BantuanTab</Text>
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
    },
});

//make this component available to the app
export default BantuanTab;
