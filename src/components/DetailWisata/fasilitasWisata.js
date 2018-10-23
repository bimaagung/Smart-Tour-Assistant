//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { Label, Button,Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch, ScrollableTab } from 'native-base';
import { Rating, AirbnbRating } from 'react-native-ratings';

// create a component
class FasilitasWisata extends Component {
    render() {
        return (
            <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.containerHeader}>
                        <Image style={{width: null, height: 150, borderRadius:5}} source={{uri: 'http://sharingdisana.com/wp-content/uploads/2016/09/pantai-kuta-Lombok.jpg' }}/>
                        <Text style={{paddingTop:10}}>Fasilitas</Text>
                        <Label style={styles.labelWisata}>Pantai Tanah Lot</Label>
                        <Text>Kuta - Bali</Text>
                        <View style={styles.ratingWisata}>
                        <AirbnbRating
                            count={5}
                            reviews={false}
                            defaultRating={3}
                            size={25}
                        />
                        </View>
                    </View>
                    <View style={{paddingTop:20}}>
                        <ListItem icon>
                            <Left>
                            <Button style={{ backgroundColor: "#42b549" }}>
                                <Icon active name="locate" />
                            </Button>
                            </Left>
                            <Body>
                            <Text>Parkiran</Text>
                            </Body>
                            <Right>
                            <Icon type="MaterialIcons" name="check-circle" style={{fontSize: 24, color: '#42b549'}}/>
                            </Right>
                        </ListItem>

                         <ListItem icon>
                            <Left>
                            <Button style={{ backgroundColor: "#42b549" }}>
                                <Icon active name="locate" />
                            </Button>
                            </Left>
                            <Body>
                            <Text>Kamar Mandi</Text>
                            </Body>
                            <Right>
                            <Icon type="MaterialIcons" name="check-circle" style={{fontSize: 24, color: '#42b549'}}/>
                            </Right>
                        </ListItem>

                        <ListItem icon>
                            <Left>
                            <Button style={{ backgroundColor: "#42b549" }}>
                                <Icon active name="locate" />
                            </Button>
                            </Left>
                            <Body>
                            <Text>Banana Boat</Text>
                            </Body>
                            <Right>
                            <Icon type="MaterialIcons" name="check-circle" style={{fontSize: 24, color: '#42b549'}}/>
                            </Right>
                        </ListItem>

                          <ListItem icon>
                            <Left>
                            <Button style={{ backgroundColor: "#42b549" }}>
                                <Icon active name="locate" />
                            </Button>
                            </Left>
                            <Body>
                            <Text>Ban Renang</Text>
                            </Body>
                            <Right>
                            <Icon type="MaterialIcons" name="check-circle" style={{fontSize: 24, color: '#42b549'}}/>
                            </Right>
                        </ListItem>

                          <ListItem icon>
                            <Left>
                            <Button style={{ backgroundColor: "#42b549" }}>
                                <Icon active name="locate" />
                            </Button>
                            </Left>
                            <Body>
                            <Text>Restoran</Text>
                            </Body>
                            <Right>
                            <Icon type="MaterialIcons" name="check-circle" style={{fontSize: 24, color: '#42b549'}}/>
                            </Right>
                        </ListItem>

                        <ListItem icon>
                            <Left>
                            <Button style={{ backgroundColor: "#42b549" }}>
                                <Icon active name="locate" />
                            </Button>
                            </Left>
                            <Body>
                            <Text>Jet Sky</Text>
                            </Body>
                            <Right>
                            <Icon type="MaterialIcons" name="cancel" style={{fontSize: 24, color: 'red'}}/>
                            </Right>
                        </ListItem>
                       
                    </View>
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
        top:230
    },
    labelWisata: {
        fontSize:22,
        paddingTop:5,
        fontWeight:'500',
    }, 
    textDeskripsi: {
        paddingTop:30,
        textAlign:'justify',
    },

});

//make this component available to the app
export default FasilitasWisata;
