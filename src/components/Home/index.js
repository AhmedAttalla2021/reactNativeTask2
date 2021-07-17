import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    src: require('../../assets/images/1.jpg'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    src: require('../../assets/images/2.jpg'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    src: require('../../assets/images/3.jpg'),
  },
  {
    id: '58694a0f-3das1-471f-bd96-145571e29d72',
    src: require('../../assets/images/4.jpg'),
  },
];

const Item = ({src}) => (
  <View>
    <Image style={{width: 300, height: 300}} source={src} />
    <Text>{src}</Text>
  </View>
);
export default function index() {
  const renderItem = ({item}) => <Item src={item.src} />;
  return (
    <View>
      <FlatList data={DATA} renderItem={renderItem} />
    </View>
  );
}
