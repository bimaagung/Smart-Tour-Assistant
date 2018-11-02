import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/Routes';

console.ignoredYellowBox = [
  'Remote debugger is in a background tab which may cause apps to perform slowly'
]
export default class App extends React.Component {
  
  render() {
    return (
          <Routes />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
