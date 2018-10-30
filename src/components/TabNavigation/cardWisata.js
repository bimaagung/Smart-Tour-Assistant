//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {Icon, Text, Label, Button, TabHeading} from 'native-base';
import { Rating, AirbnbRating } from 'react-native-ratings';

// create a component
class CardWisata extends Component {

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
            <Icon name="ios-person" style={{color:tintColor, fontSize:24}}/>
        )
    }

    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
          }

        return (
            <View style={styles.cardWisata}>
                <Image style={{width: null, height: 150, borderRadius:5}} source={{uri: this.props.imageSource }}/>
                <View style={styles.ratingWisata}>
                <AirbnbRating
                    count={5}
                    reviews={false}
                    defaultRating={this.props.ratingWisata}
                    size={25}
                />
                </View>
                <Label style={styles.labelWisata}>{this.props.labelWisata}</Label>
                <Label style={styles.labelTempat}>{this.props.namaTempat}</Label>  
                <View style={styles.buttonWisata}>
                    <Button rounded success onPress={this.props.moveDetail}>
                        <Text style={{fontWeight:'bold'}}>Lihat!</Text> 
                    </Button>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    cardWisata: {
        marginTop:10,
        flex: 1,
        borderWidth:1,
        borderRadius:6,
        borderColor:'#e6e6e6'
    },

    labelWisata: {
        fontSize:18,
        fontWeight:'500',
        paddingTop:45,
        paddingLeft:15
    }, 

    labelTempat: {
        fontSize:15,
        paddingTop:5,
        paddingLeft:15
    },

    ratingWisata: {
        position:'absolute',
        zIndex:10,
        left:5,
        top:135
    },

    buttonWisata:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingBottom:10,
        paddingRight:10,
    },

});

//make this component available to the app
export default CardWisata;
