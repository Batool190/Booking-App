import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, Touchable, TouchableOpacity, View} from 'react-native';
import {backButton, drawer, notification, user5} from '../../Constants/Images';
import styles from './styles';

const Header = ({back}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.justify}>
          {back == 1 ? (
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Image source={backButton} style={styles.back} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Image source={drawer} style={styles.drawer} />
            </TouchableOpacity>
          )}

          <View style={styles.pics}>
            <TouchableOpacity
              style={styles.notification}
              onPress={() => navigation.navigate('NotificationScreen')}
            >
              <Image source={notification} style={styles.bell} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProfileFinal')}
            >
              <Image source={user5} style={styles.user} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
