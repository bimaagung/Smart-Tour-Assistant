//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Label} from 'native-base';


// create a component
class CardRekomendasi extends Component {
    render() {
        return (
            <View style={styles.cardRekomendasi}>
                <Image style={{width: 130, height: 130, borderRadius:5}} source={{uri: this.props.imageSource }}/>
                <Label>{this.props.labelWisata}</Label>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    cardRekomendasi: {
        padding:5
    },
});

//make this component available to the app
export default CardRekomendasi;