import {StyleSheet} from 'react-native';
import ApplicationStyles from '../../Theme/ApplicationStyles';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
  },
  map: {
    alignSelf: 'stretch',
    height: '100%',
  },
});
