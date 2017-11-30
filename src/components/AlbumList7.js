import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

//install axios for ajax call
// npm install --save axios

//Class Component
class AlbumList exteds Component {
  state ={
    albums:[]
  };
  //lifecycle method id only for class component
  ComponentWillMount(){
    //console.log("ComponentWillMount first !");  //command +D for debug
    //debugger;
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
     .then(response => this.setState({
        albums:respnse.data
     })) //test
  }

  renderAlums() {
    retur this.state.albums.map(alumn =><Text>{alumn.title}</Text>);
  }
  render() {
    console.log(this.state); //test

  	return(
	   <View>
	     {this.renderAlums()}
	   </View>
    );
  }
}

export default AlbumList;

//Test