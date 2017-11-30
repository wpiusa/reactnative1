//import
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//create a Component jsx statement ES6
const App = () => (
  <Header />
);

//Render it to the device (albums is project name)
AppRegistry.registerComponent('albums', ()=>App);


//test again
