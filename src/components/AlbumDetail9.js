import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

//only diplay infor: functional componet
const AlbumDetail = ({album}) => {
  const {title,artist,thumbnai_image} = album;
  const {
    thumnailStyle, 
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle
  } = styles;

	retutn(
     <Card>
       <CardSection>
	       <View style={thumbnailContainerStyle}>
             <Image 
               styles={thumnailStyle}
               source={ uri:thumbnai_image} />
	       </View>
	       <View style={headerContentStyle}>
	          <Text style={headerTextStyle}>{title}</Text>
	          <Text>{artist}</Text>
	       </View>
       </CardSection>
     </Card>
	);
}

const styles= {
  headerContentStyle: {
  	flexDirection: 'column',
  	justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
}
export default AlbumDetail;

//test