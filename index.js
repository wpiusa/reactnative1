//import
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList'

//create a Component jsx statement ES6
const App = () => (
  <View>	
    <Header headerText={'Albums!'}/>
    <AlbumList />
  </View>
);

//Render it to the device (albums is project name)
AppRegistry.registerComponent('albums', ()=>App);


//test again
