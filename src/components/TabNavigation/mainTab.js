//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Image, ScrollView, ListView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Icon, Label } from 'native-base';

import CardRekomendasi from './cardRekomendasi';
import CardWisata from './cardWisata';
// create a component
class MainTab extends Component {

    constructor(props){
        super(props)
        this.state = {
            isLoading: true,
            isReady: false,
        }
    }
    

    componentDidMount(){
        return fetch('http://192.168.43.43/smarttourassistant/admin/main_admin/getwisata')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson)
                }, function(){})
            }).catch((error) => {
                console.error(error);
            })
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

    ListViewItemSeparator = () => {
        return (
            <View style = {{width: '100%', backgroundColor: '#ffff'}}/>
        )
    }

    move_detail(id, label, tempat, tanggal, rating, foto, deskripsi, jarak, jalan, motor, mobil, suhu)
    {
        this.props.navigation.navigate('DetailWisata',{
            id: id,
            label: label,
            tempat: tempat,
            tanggal: tanggal,
            rating: rating,
            foto: foto,
            deskripsi: deskripsi,
            jarak: jarak,
            jalan: jalan,
            motor: motor,
            mobil: mobil,
            suhu: suhu
        })
    }


    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
          }
        
          if(this.state.isLoading){
              return(
                  <View style={{flex:1, paddingTop:20}}>
                    <ActivityIndicator/>
                  </View>
              )
          }

        return (
            <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.cardHeader1}>
                        <Image style={{width: null, height: 100, borderRadius:5}} source={{uri: 'https://amzsewamobiljogja.id/files/Paket-Wisata-Jogja-3-Hari-2-Malam-Hits.png'}}/>
                    </View>
                    <View style={styles.cardHeader2}>
                        <View style={styles.headerContent}>
                            <Label style={styles.label}>Rekomendasi</Label>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollRekomendasi}>
                                <ListView
                                    horizontal={true}
                                    dataSource = {this.state.dataSource}
                                    // renderSeparator = {this.ListViewItemSeparator}
                                    renderRow = {(rowData) =>
                                        <TouchableOpacity  
                                                onPress = {this.move_detail.bind(this,
                                                rowData.id,
                                                rowData.label,
                                                rowData.tempat,
                                                rowData.tanggal,
                                                rowData.rating,
                                                rowData.foto,
                                                rowData.deskripsi,
                                                rowData.jarak,
                                                rowData.jalan,
                                                rowData.motor,
                                                rowData.mobil,
                                                rowData.suhu
                                            )}>
                                            <CardRekomendasi imageSource={rowData.foto} labelWisata={rowData.label} />
                                        </TouchableOpacity>
                                    }
                                />
                            </ScrollView>
                                   
                        </View>

                        <View style={styles.headerContent}>
                                <ListView
                                    vertical={true}
                                    dataSource = {this.state.dataSource}
                                    // renderSeparator = {this.ListViewItemSeparator}
                                    renderRow = {(rowData) => 
                                        <CardWisata
                                            moveDetail = {this.move_detail.bind(this,
                                                rowData.id,
                                                rowData.label,
                                                rowData.tempat,
                                                rowData.tanggal,
                                                rowData.rating,
                                                rowData.foto,
                                                rowData.deskripsi,
                                                rowData.jarak,
                                                rowData.jalan,
                                                rowData.motor,
                                                rowData.mobil,
                                                rowData.suhu
                                            )}
                                            imageSource= {rowData.foto}
                                            labelWisata= {rowData.label}
                                            ratingWisata= {rowData.rating}
                                            namaTempat= {rowData.tempat}
                                        />
                                    }
                                />
                        </View> 
                    </View>   
                </View>
        </ScrollView>
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

    headerContent:{
        marginTop: 20,
        borderBottomColor: '#e6e6e6',
        borderBottomWidth:1
    },

    label: {
        fontSize:16,
        fontWeight:'500'
    },

    scrollRekomendasi: {
        marginTop: 10
    }

});

//make this component available to the app
export default MainTab;
