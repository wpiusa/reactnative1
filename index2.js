//import
import React from 'react';
import ReactNative from 'react-native';

//create a Component jsx statement ES6
const App = () => {
	return(
      <Text>Some Text</Text>
	);
};

//Render it to the device (albums is project name)
ReactNative.AppRegistry.registerComponent('albums', ()=>App);