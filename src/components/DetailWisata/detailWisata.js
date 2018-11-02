//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Dimensions, Alert,  PermissionsAndroid, Platform } from 'react-native';
import { Icon, Header, Item, Input, Button, Text, Tabs  } from 'native-base';
import MapView from 'react-native-maps';
import { Constants, Location, Permissions } from 'expo';
import SlidingPanel from 'react-native-sliding-up-down-panels'; //https://www.npmjs.com/package/react-native-sliding-up-down-panel
// create a component

import MainDetailWisata from './mainDetailWisata';

const { width, height } = Dimensions.get('window');

class DetailWisata extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            wathID: null,
            location: null,
            errorMessage: null,
            isReady: false,
            TextId:'',
            TextLabel:'',
            TextTempat:'',
            TextTanggal:'',
            TextRating:'',
            TextFoto:'',
            TextDeskripsi:'',
            TextJarak:'',
            TextJalan:'',
            TextMotor:'',
            TextMobil:'',
            TextSuhu:'',
        }
    }


    
      async componentWillMount() {

        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
              errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
          } else {
            this._getLocationAsync();
          }
 
        
      await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      });
      this.setState({
            isReady:true,
            TextId: this.props.navigation.state.params.id,
            TextLabel: this.props.navigation.state.params.label,
            TextTempat: this.props.navigation.state.params.tempat,
            TextTanggal: this.props.navigation.state.params.tanggal,
            TextRating: this.props.navigation.state.params.rating,
            TextFoto: this.props.navigation.state.params.foto,
            TextDeskripsi: this.props.navigation.state.params.deskripsi,
            TextJarak: this.props.navigation.state.params.jarak,
            TextJalan: this.props.navigation.state.params.jalan,
            TextMotor: this.props.navigation.state.params.motor,
            TextMobil: this.props.navigation.state.params.mobil,
            TextSuhu: this.props.navigation.state.params.suhu
        })
       
        } 

        async _getLocationAsync() {
            let { status } = await Permissions.askAsync(Permissions.LOCATION);
            if (status !== 'granted') {
              this.setState({
                errorMessage: 'Permission to access location was denied',
              });
            }
        
            const location = await Location.getCurrentPositionAsync(
                {'enableHighAccuracy':true,'maximumAge':1000});

            // const wathID = await Location.watchPositionAsync({'enableHighAccuracy':true, timeInterval:20000, distanceInterval: 1})
            this.setState({ location });
          };



    render() {

        let text = 'Waiting..';
        if (this.state.errorMessage) {
          text = this.state.errorMessage;
        } else if (this.state.location) {
          text = JSON.stringify(this.state.location);
        }


        
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
          }

        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>{text}</Text>

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
                            <MainDetailWisata
                                label={this.state.TextLabel}
                                foto={this.state.TextFoto}
                                tempat={this.state.TextTempat}
                                rating={this.state.TextRating}
                                deskripsi={this.state.TextDeskripsi}
                                jarak={this.state.TextJarak}
                                jalan={this.state.TextJalan}
                                motor={this.state.TextMotor}
                                mobil={this.state.TextMobil}
                                suhu={this.state.TextSuhu}
                            />
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
        backgroundColor: '#42b549',
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
