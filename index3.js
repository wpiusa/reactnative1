//import
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//create a Component jsx statement ES6
const App = () => (
  <Text>Some Text</Text>
);

//Render it to the device (albums is project name)
AppRegistry.registerComponent('albums', ()=>App);

//Run : react-native run-ios