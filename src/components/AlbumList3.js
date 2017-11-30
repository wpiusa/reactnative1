import React, { Component } from 'react';
import { View, Text } from 'react-native';

/*

// this is functional componet

const AlbumList = () => {
 return(
   <View>
     <Text>Album List!!</Text>
   </View>
 );
}
*/

//Class Component
class AlbumList exteds Component {
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