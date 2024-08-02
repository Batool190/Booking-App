import {StyleSheet} from 'react-native';
import {COLORS} from '../../Constants/COLORS';

const styles = StyleSheet.create({
  user: {
    resizeMode: 'contain',
    width: 45,
    height: 45,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: COLORS.lightGreen,
  },
  pics: {
    flexDirection: 'row',
  },
  justify: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  bell: {
    resizeMode: 'contain',
    width: 30,
    height: 30,
    tintColor: COLORS.white,
    marginRight: 10,
    alignSelf: 'center',
  },
  drawer: {
    resizeMode: 'contain',
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  inner: {
    flex: 1,
    marginTop: 5,
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  container: {
    height: '8%',
    width: '100%',
    backgroundColor: COLORS.black,
  },
  notification: {
    // flex: 1,
    alignSelf: 'center',
    marginRight: 10,
  },
  back: {
    tintColor: COLORS.white,
    resizeMode: 'contain',
    width: 20,
    height: 20,
  },
  backButton: {
    alignSelf: 'center',
  },
});

export default styles;
