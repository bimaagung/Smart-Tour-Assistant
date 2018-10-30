//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Dimensions, Alert,  PermissionsAndroid, Platform} from 'react-native';
import { Icon, Header, Item, Input, Button, Text, Tabs  } from 'native-base';
import MapView from 'react-native-maps';
import { Constants, Location, Permissions } from 'expo';
import SlidingPanel from 'react-native-sliding-up-down-panels'; //https://www.npmjs.com/package/react-native-sliding-up-down-panel
// create a component
import MainDetailWisata from './mainDetailWisata';

const { width, height } = Dimensions.get('window');

// const SCREEN_HEIGHT = height
// const SCREEN_WIDTH = width
// const ASPECT_RATIO = width / height
// const LATTITUDE_DELTA = 0.0922
// const LONGITUDE_DELTA = LONGITUDE_DELTA * ASPECT_RATIO
class DetailWisata extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            region: {
                latitude: null,
                longitude: null,
                latitudeDelta: null,
                longitudeDelta: null
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
            TextMotor:'',
            TextMobil:'',
            TextSuhu:'',
        }
    }


      calcDelta(lat, lon, accuracy) {
          const oneDegreeOfLongitudInMeters = 111.32;
          const circumference = (400075 / 360)

          const latDelta = accuracy * (1 / (Math.cos(lat)* circumference))
          const lonDelta = (accuracy / oneDegreeOfLongitudInMeters)

          this.setState({
              region: {
                  latitude: lat,
                  longitude: lon,
                  latitudeDelta: latDelta,
                  longitudeDelta: lonDelta
              }
          })
      }

      async componentWillMount() {
        
        // const { status } = await Expo.Permissions.askAsync(Expo.Permissions.LOCATION);

        // if (status === 'granted') {
        //     const location = await Expo.Location.getCurrentPositionAsync({
        //     enableHighAccuracy: true,
        //     });
        //     return location;
        // }

        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude
            const lon = position.coords.longitude
            const accuracy = position.coords.accuracy
            this.calcDelta(lat, lon, accuracy)
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        )
        
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
        
        componentWillUnmount(){
            navigator.geolocation.clearWatch(this.watchID)
         }

         marker(){
             return {
                 latitude: this.state.region.latitude,
                 longitude: this.state.region.longitude,
             }
         }


    render() {

        return (
            <View style={styles.container}>
                {this.state.region.latitude ?
                 <MapView
                    style={styles.map}
                    region={this.state.region}>

                    <MapView.Marker
                        coordinate={this.marker()}
                        title = "Disini"
                        description = "Home"
                    >
                         <View style={styles.radius}>
                            <View style={styles.marker} />
                        </View>
                    </MapView.Marker>
                </MapView> : null}

                {/* <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <MapView.Marker
                        coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                        <View style={styles.radius}>
                            <View style={styles.marker} />
                        </View>
                    </MapView.Marker>
                </MapView> */}

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
