import { StyleSheet, PixelRatio, Dimensions } from 'react-native';
import Fonts from '../../Theme/Fonts';
import ApplicationStyles from '../../Theme/ApplicationStyles';
import scale from '../../Utils/scale';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    alignItems: 'center'
  },
  title: {
    ...Fonts.style.h2,
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    ...Fonts.style.small,
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 100,
    color: 'red'
  },
  inputContainer: {
    marginVertical: 10,
  },
  subsContainer: {
    height: scale(55),
    width: scale(300),
    backgroundColor: 'black',
    justifyContent: 'center',
    marginTop: scale(22)
  },
  subsText: {
    color: 'white',
    fontSize: scale(16),
    textAlign: 'center'
  },
  textInputContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    textAlign: 'center',
    fontSize: 16,
    textAlignVertical: 'center',
    height: 50,
    width: width - 50,
    marginBottom: 10,
    alignSelf: 'center'
  },
  ratingContainer: {
    marginVertical: 10,
  }
});
