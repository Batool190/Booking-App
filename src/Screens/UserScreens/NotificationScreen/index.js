import React from 'react';
import {Text, ScrollView, View} from 'react-native';
import styles from './styles';
import Header from '../../../Components/Header';
import NotificationData from '../../../Constants/NotificationData';
import Notifications from '../../../Components/Notifications'

const NotificationScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>
      <View>
        <Header back={1} />
        <View>
          {
            NotificationData?.map((item,i)=>{
              return (
                <Notifications key={i} />
              )
            })
          }
          {/* <Notifications /> */}
        </View>
      </View>
    </ScrollView>
  );
};

export default NotificationScreen;
