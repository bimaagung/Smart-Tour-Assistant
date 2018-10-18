//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Label, ScrollableTab } from 'native-base';

import CardRekomendasi from './cardRekomendasi';
// create a component
class MainTab extends Component {

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
            <Icon name="ios-home" style={{color:tintColor, fontSize:24}}/>
        )
    }

    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
          }

        return (
            <View style={styles.container}>
                <View style={styles.cardHeader1}>
                    <Image style={{width: null, height: 100, borderRadius:5}} source={{uri: 'https://www.infokekinian.com/wp-content/uploads/2018/04/gojek-1.jpg'}}/>
                </View>
                <View style={styles.cardHeader2}>
                    <Label style={styles.label}>Rekomendasi</Label>
                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                           <CardRekomendasi imageSource='https://www.kasihberita.com/wp-content/uploads/2018/03/Tempat-Wisata-di-Bali.jpeg' labelWisata='Tanah Lot' />
                           <CardRekomendasi imageSource='https://www.kasihberita.com/wp-content/uploads/2018/03/Tempat-Wisata-di-Bali.jpeg' labelWisata='Tanah Lot' />
                           <CardRekomendasi imageSource='https://www.kasihberita.com/wp-content/uploads/2018/03/Tempat-Wisata-di-Bali.jpeg' labelWisata='Tanah Lot' />
                           <CardRekomendasi imageSource='https://www.kasihberita.com/wp-content/uploads/2018/03/Tempat-Wisata-di-Bali.jpeg' labelWisata='Tanah Lot' />
                           <CardRekomendasi imageSource='https://www.kasihberita.com/wp-content/uploads/2018/03/Tempat-Wisata-di-Bali.jpeg' labelWisata='Tanah Lot' />
                           <CardRekomendasi imageSource='https://www.kasihberita.com/wp-content/uploads/2018/03/Tempat-Wisata-di-Bali.jpeg' labelWisata='Tanah Lot' />
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardHeader1: {
        backgroundColor:'#ffffff',
        padding:15,
    },

    cardHeader2: {
        marginTop: 10,
        backgroundColor:'#ffffff',
        padding:15,
    },

    label: {
        fontSize:16,
        fontWeight:'500'
    }

});

//make this component available to the app
export default MainTab;
