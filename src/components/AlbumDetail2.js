import React from 'react';
import { View, Text } from 'react-native';

//only diplay infor: functional componet
const AlbumDetail = (props) => {
	retutn(
     <View>
       <Text>{props.album.title}</Text>
     </View>
	);
}

export default AlbumDetail;