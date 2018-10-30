//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { Label, Button, ListItem, Text, Icon, Left, Body, Right, Switch, ScrollableTab } from 'native-base';
import { AirbnbRating } from 'react-native-ratings';

// create a component
class InfoWisata extends Component {
    render() {
        return (
            <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.containerHeader}>
                        <Image style={{width: null, height: 150, borderRadius:5}} source={{uri: this.props.fotoDetail }}/>
                        <Label style={styles.labelWisata}>{this.props.labelDetail}</Label>
                        <Text>{this.props.tempatDetail}</Text>
                        <Text style={styles.textDeskripsi}>
                           {this.props.deskripsiDetail}
                        </Text>
                        <View style={styles.ratingWisata}>
                        <AirbnbRating
                            count={5}
                            reviews={false}
                            defaultRating={this.props.ratingDetail}
                            size={25}
                        />
                        </View>
                    </View>
                    <ListItem icon>
                        <Left>
                        <Button style={{ backgroundColor: "#007AFF" }}>
                            <Icon active name="locate" />
                        </Button>
                        </Left>
                        <Body>
                        <Text>Jarak</Text>
                        </Body>
                        <Right>
                        <Text>{this.props.jarakDetail} Km/Jam</Text>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                        <Button style={{ backgroundColor: "#007AFF" }}>
                            <Icon active name="alarm" />
                        </Button>
                        </Left>
                        <Body>
                        <Text>Waktu</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                        <Button style={{ backgroundColor: "#007AFF" }}>
                            <Icon active name="walk" />
                        </Button>
                        </Left>
                        <Body>
                        <Text>Jalan Kaki</Text>
                        </Body>
                        <Right>
                        <Text>{this.props.jalanDetail} Jam</Text>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                        <Button style={{ backgroundColor: "#007AFF" }}>
                            <Icon active name="bicycle" />
                        </Button>
                        </Left>
                        <Body>
                        <Text>Motor</Text>
                        </Body>
                        <Right>
                        <Text>{this.props.motorDetail} Jam</Text>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                        <Button style={{ backgroundColor: "#007AFF" }}>
                            <Icon active name="car" />
                        </Button>
                        </Left>
                        <Body>
                        <Text>Mobil</Text>
                        </Body>
                        <Right>
                        <Text>{this.props.mobilDetail} Jam</Text>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                        <Button style={{ backgroundColor: "#007AFF" }}>
                            <Icon active name="thermometer" />
                        </Button>
                        </Left>
                        <Body>
                        <Text>Suhu</Text>
                        </Body>
                        <Right>
                        <Text>{this.props.suhuDetail} °C</Text>
                        </Right>
                    </ListItem>
                </View>
            </ScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({

    container: {
        height:800,
        flex:1,
    },

    containerHeader: {
         padding: 15
    },
    ratingWisata: {
        position:'absolute',
        zIndex:10,
        left:10,
        top:200
    },
    labelWisata: {
        fontSize:22,
        paddingTop:10,
        fontWeight:'500',
    }, 
    textDeskripsi: {
        paddingTop:30,
        textAlign:'justify',
    },

});

//make this component available to the app
export default InfoWisata;
