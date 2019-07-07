import React, {Component} from 'react';
import Torch from 'react-native-torch';
import Sound from 'react-native-sound'
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default class App extends Component {
  state = {
    status: false
  };
  
  placeNameChangedHandler = val => { 
    if ( this.state.status == false ){
      this.setState({
        status : true
      })
      Torch.switchState(true);
    }
    else{
      this.setState({
        status : false
      })
      Torch.switchState(false);
    }
  //Torch.switchState(false); // Turn ON
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
        style = {{width : 300, borderColor: "black", borderWidth: 1}}
        value={this.state.placename}
  
        />
        <Button
         title="Add" 
         onPress={this.placeNameChangedHandler}
         />
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