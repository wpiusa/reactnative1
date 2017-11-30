import React, { Component } from 'react';
import { View, Text } from 'react-native';

//Class Component
class AlbumList exteds Component {
  //lifecycle method id only for class component
  ComponentWillMount(){
    //console.log("ComponentWillMount first !");  //command +D for debug
    //debugger;
  }

  render() {
  	return(
	   <View>
	     <Text>Album List!!</Text>
	   </View>
    );
  }
}

export default AlbumList;

//Test