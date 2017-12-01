import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

//only diplay infor: functional componet
const AlbumDetail = ({album}) => {
  const {title,artist,thumbnai_image} = album;
	retutn(
     <Card>
       <CardSection>
	       <View>
             <Image 
               styles={styles.thumnailStyle}
               source={ uri:thumbnai_image} />
	       </View>
	       <View style={styles.headerContentStyle}>
	          <Text>{title}</Text>
	          <Text>{artist}</Text>
	       </View>
       </CardSection>
     </Card>
	);
}

const styles= {
  headerContentStyle: {
  	flexDirection: 'column',
  	justifyContent: 'space-around'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
}
export default AlbumDetail;

//test