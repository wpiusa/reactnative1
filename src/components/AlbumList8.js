import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

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
    return(
      this.state.albums.map(alumn =>
      <AlbumDetail key={alumn.title} alumn={alumn} />
    );
  }
  render() {
    console.log(this.state); //test

  	return(
	   <ScrollView>
	     {this.renderAlums()}
	   </ScrollView>
    );
  }
}

export default AlbumList;

//Test