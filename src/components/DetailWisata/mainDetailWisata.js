//import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, Header, Item, Input, Button, Text, Tabs, Tab, TabHeading, Container  } from 'native-base';
// create a component
import Tab1 from "./infoWisata";
import Tab2 from "./fasilitasWisata";

class MainDetailWisata extends Component {
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
    
    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
          }

        return (
            <Container>
                <Tabs>
                <Tab heading={ <TabHeading style={{backgroundColor:'#42b549'}}><Icon name="information-circle" /></TabHeading>}>
                    <Tab1 
                        labelDetail={this.props.label}
                        fotoDetail={this.props.foto}
                        tempatDetail={this.props.tempat}
                        ratingDetail={this.props.rating}
                        deskripsiDetail={this.props.deskripsi}
                        jarakDetail={this.props.jarak}
                        jalanDetail={this.props.jalan}
                        motorDetail={this.props.motor}
                        mobilDetail={this.props.mobil}
                        suhuDetail={this.props.suhu}       
                    />
                </Tab>
                <Tab heading={ <TabHeading style={{backgroundColor:'#42b549'}}><Icon name="images" /></TabHeading>}>
                    <Tab2 />
                </Tab>
                </Tabs>
            </Container>
        );
    }
}
// define your styles
const styles = StyleSheet.create({
  
});

//make this component available to the app
export default MainDetailWisata;
