//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import { Icon, Header, Item, Input, Button, Text, Tabs  } from 'native-base';
import MapView from 'react-native-maps';
import SlidingPanel from 'react-native-sliding-up-down-panels'; //https://www.npmjs.com/package/react-native-sliding-up-down-panel
// create a component

import MainDetailWisata from './mainDetailWisata';

const { width, height } = Dimensions.get('window');

class DetailWisata extends Component {
    

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
    
    // static navigationOptions = {
    //     headerTitle: 'Smart Tour Assistant',
    //     headerLeft: 
    //     <TouchableHighlight>
    //         <Icon name="md-arrow-back" style={{paddingLeft:10, color:'white'}}/>
    //     </TouchableHighlight>
    //     }

    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
          }

        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                    latitude: -7.1505732,
                    longitude: 109.9036498,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}
                >
                    <MapView.Marker
                        coordinate={{
                        latitude: -7.1505732,
                        longitude: 109.9036498,
                        }}
                    >
                        <View style={styles.radius}>
                            <View style={styles.marker} />
                        </View>
                    </MapView.Marker>
                </MapView>

                <SlidingPanel
                    slidingPanelLayoutHeight={100}
                    AnimationSpeed = {300}
                    headerLayoutHeight = {40}
                    headerLayout = { () =>
                        <View style={styles.headerLayoutStyle}>
                            <Icon name="ios-menu" style={{fontSize:40, color:'lightgrey'}} />
                        </View>
                    }
                    slidingPanelLayout = { () =>
                        <View style={styles.slidingPanelLayoutStyle}>
                            <MainDetailWisata/>
                        </View>
                    }
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    radius:{
        height:50,
        width:50,
        borderRadius:50 / 2,
        overflow:'hidden',
        backgroundColor:'rgba(0, 112, 225, 0.1)',
        borderWidth:1,
        borderColor: 'rgba(0, 112, 225, 0.3)',
        alignItems:'center',
        justifyContent:'center'
    },
    marker:{
        height:20,
        width:20,
        borderWidth: 2,
        borderColor:'white',
        borderRadius: 20 / 2,
        overflow:'hidden',
        backgroundColor: '#007AFF',
    },
    map: {
        position:'absolute',
        left:0,
        bottom:0,
        top:0,
        right:0,

    },

    headerLayoutStyle: {
        width, 
        height:40, 
        backgroundColor: 'white',
        alignItems:'center'
      },
      slidingPanelLayoutStyle: {
        width, 
        height, 
        flex:1,
        backgroundColor: 'white', 
        // justifyContent: 'center', 
      },
      commonTextStyle: {
        color: 'white', 
        fontSize: 18,
      },
      
});



//make this component available to the app
export default DetailWisata;
