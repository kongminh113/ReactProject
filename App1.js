import React, {Component} from 'react';
import Sound from 'react-native-sound'
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default class App extends Component {
  state = {
    placename: ''
  };
  
  placeNameChangedHandler = val => {
    this.setState({
      placename: val
          });
    
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
        style = {{width : 300, borderColor: "black", borderWidth: 1}}
        value={this.state.placename}
        onChangeText={this.placeNameChangedHandler}
        />
        <Button title="Add" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
