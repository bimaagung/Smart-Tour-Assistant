//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
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
            <Container>
                <Card style={styles.cardHeader}>
                    <CardItem cardBody>
                        <Image source={{uri: 'https://gadgetren.com/wp-content/uploads/2018/08/Cara-Pakai-Voucher-GoJek-Header-700x350.jpg'}} style={{height: 100,  flex: 1}}/>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem cardBody>
                        <Image source={{uri: 'https://gadgetren.com/wp-content/uploads/2018/08/Cara-Pakai-Voucher-GoJek-Header-700x350.jpg'}} style={{height: 100,  flex: 1}}/>
                    </CardItem>
                </Card>
            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardHeader:{
        marginTop:10
    }
});

//make this component available to the app
export default MainTab;
