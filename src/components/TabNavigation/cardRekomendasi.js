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
                <Text numberOfLines={1} style={styles.labelRekomendasi}>{this.props.labelWisata}</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    cardRekomendasi: {
        padding:5
    },

    labelRekomendasi: {
        marginVertical: 10,
        fontWeight:'500',
        fontSize:14,
        width:130
    }
});

//make this component available to the app
export default CardRekomendasi;
