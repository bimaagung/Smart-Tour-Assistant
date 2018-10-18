//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Text } from 'native-base';
import { createMaterialTopTabNavigator } from 'react-navigation';

import MainTab from './TabNavigation/mainTab';
import BantuanTab from './TabNavigation/bantuanTab';
import ProfilTab from './TabNavigation/profilTab';

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
                <TabNavigation/>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        padding: 30,
        backgroundColor:'#000000',
        alignItems: 'center',
        

    },
});

const TabNavigation = createMaterialTopTabNavigator({
        
            Home: {
                screen: MainTab
            },
            Bantuan: {
                screen: BantuanTab
            },
            Profil: {
                screen: ProfilTab
            }
          },{
                animationEnabled: true,
                swipeEnabled: true,
                tabBarPosition:'top',
                tabBarOptions:{
                    style:{
                        ...Platform.select({
                            android:{
                                backgroundColor:'#000000'
                            }
                        }),
                        height:60
                    },
                activeTintColor: 'greenyellow',
                inactiveTintColor: 'white',
                showLabel: true,
                showIcon: true,
                upperCaseLabel:false,
                labelStyle: {
                    fontSize: 12,
                  },
                indicatorStyle: {
                borderBottomColor: '#000000',
                borderBottomWidth: 2,
                },
            }
        }
)

//make this component available to the app
export default Home;
