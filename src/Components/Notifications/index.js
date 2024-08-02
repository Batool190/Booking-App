import React from 'react';
import {Text, ScrollView, View, Image} from 'react-native';
import styles from './styles';
import { avatar } from '../../Constants/Images';


const Notifications = props => {
  const {source, title, description} = props;
  return (
    <View style={styles.mainView}>
      <View>
        <Image source={avatar} />
      </View>
      <View >
        <Text>hehhh</Text>
        {/* <Text>{title}</Text>
        <Text>{description}</Text> */}
      </View>
    </View>
  );
};

export default Notifications;
