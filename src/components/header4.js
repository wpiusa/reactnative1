//import
import React from 'react';
import { Text, View } from 'react-native';

//make a Component
const Header = () => {
  const { textStyle, viewStyle } = styles;

  return (
  	<View styles={viewStyle}>
  	  <Text style={textStyle}>Albums!</Text>
    </View>
  );
}

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8'
  },

  textStyle:{
  	fontSize: 20
  }
}

//Make the component available to other parts of the app
export default Header;

//test