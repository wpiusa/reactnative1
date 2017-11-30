import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

//only diplay infor: functional componet
const AlbumDetail = (props) => {
	retutn(
     <Card>
       <CardSection>
          <Text>{props.album.title}</Text>
       </CardSection>

        <CardSection>
          <Text>{props.album.title}</Text>
       </CardSection>
     </Card>
	);
}

export default AlbumDetail;

//test