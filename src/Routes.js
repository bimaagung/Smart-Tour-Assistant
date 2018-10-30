import React, { Component } from 'react';
import { View, StyleSheet, Platform, Button, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import Splash from './components/Splash';
import DetailWisata from './components/DetailWisata/detailWisata';
import MainTab from './components/TabNavigation/mainTab';
import BantuanTab from './components/TabNavigation/bantuanTab';
import ProfilTab from './components/TabNavigation/profilTab';
import Home from './components/Home';
import { Icon } from 'native-base';

const TabsNavigator = createMaterialTopTabNavigator({
        
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
            backgroundColor: '#ffffff',
            shadowColor : '#ffffff',
            shadowOpacity: 0,
            shadowOffset: {
            height: 0,
            },
            shadowRadius: 0,
            elevation: 0,
        },
        activeTintColor: 'green',
        inactiveTintColor: '#bbbbbb',
        showLabel: true,
        showIcon: true,
        upperCaseLabel:false,
        labelStyle: {
            fontSize: 12,
          },
        indicatorStyle: {
        borderBottomColor: '#ffffff',
        borderBottomWidth: 2,
        },
    }
}
)

const Routes = createStackNavigator({
        
        Splash: {
            screen: Splash,
            navigationOptions: { 
                header: null 
            }
        },
        Home: {
            screen: TabsNavigator,
            navigationOptions: {
                // title:'Home',
                headerLeft:null,
                headerBackground: (
                    <Image
                      style={{position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, marginTop:30,marginLeft:'17%', paddingBottom:30}}
                      source={require('../assets/iconLabel.png')}
                    />
                  ),
                headerStyle: {
                    backgroundColor: '#ffffff',
                    shadowColor : '#ffffff',
                    shadowOpacity: 0,
                    shadowOffset: {
                    height: 50,
                    },
                    shadowRadius: 0,
                    elevation: 0,
                    },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }
        }, 

        DetailWisata: {
            screen: DetailWisata,
            // navigationOptions: { 
            //     header: null 
            // }
            navigationOptions: ({navigation}) => ({
                headerStyle: {
                  backgroundColor: 'rgba(0,0,0,0)',
                  height:90
                },
                headerLeft: <TouchableOpacity onPress={() =>  navigation.goBack()}> 
                                <Icon name='chevron-circle-left' type='FontAwesome' 
                                style={{fontSize:50, color:'#42b549', paddingLeft:20, paddingTop:0}}
                                />
                             </TouchableOpacity>,
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerTransparent:true,
              })
        },
        },{initialRouteName: 'Splash'});

export default Routes;