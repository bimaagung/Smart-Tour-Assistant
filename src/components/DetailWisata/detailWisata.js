//import liraries
import Expo from 'expo';
import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Dimensions, Alert,  PermissionsAndroid, Platform } from 'react-native';
import { Icon} from 'native-base';
import { Constants, Location, Permissions, MapView } from 'expo';

import SlidingPanel from 'react-native-sliding-up-down-panels'; //https://www.npmjs.com/package/react-native-sliding-up-down-panel
// create a component

import MainDetailWisata from './mainDetailWisata';

const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };
const { width, height } = Dimensions.get('window');

class DetailWisata extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            location: { 
                coords: {
                    latitude: 0,
                    longitude: 0
                }
            },
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
            TextMobil:'',
            TextMotor:'',
            TextSuhu:'',
            location: null,
            errorMessage: null,
        }
    }


    
      async componentWillMount() {
        
      this.watchLocationAsync()
 
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
        
        async watchLocationAsync() {
            try{
                const { status } = await Permissions.askAsync(Permissions.LOCATION);
                if (status === 'granted') {
                    Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);
                    
                } else {
                console.log('Location permission not granted');
                }
            }catch(err){
                console.log('Perrmissions gagal', err)
            }
          }

        locationChanged = (location) => {
            region = {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            },
            this.setState({location, region})
          }


    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
          }

        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    showsUserLocation={true}
                    region={this.state.region}
                />
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
        flex: 0.5
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
