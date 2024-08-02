import React from 'react'
import { ScrollView, Text } from 'react-native';
import Header from '../../../Components/Header';
// import styles from './styles';

const JobScreen = () => {
  return (
    <ScrollView
      // style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ justifyContent: "center" }}
    >
      <Header />
    </ScrollView>
  );
};

export default JobScreen;