import { StyleSheet, PixelRatio } from 'react-native';
import Fonts from '../../Theme/Fonts';
import Colors from '../../Theme/Colors';
import ApplicationStyles from '../../Theme/ApplicationStyles';
import scale, { verticalScale } from '../../Utils/scale';
import * as CONST from '../../Utils/Constants';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    ...Fonts.style.h2,
    textAlign: 'center',
    marginBottom: scale(10),
  },
  text: {
    ...Fonts.style.small,
    textAlign: 'center',
    color: Colors.text,
  },
  screenText: {
    ...Fonts.style.normal,
    textAlign: 'center',
    color: Colors.text,
  },
  headerContainer: {
    flex: 3,
    paddingTop: 30,
    borderWidth: 1,
    backgroundColor: '#ECE5E3',
    borderColor: CONST.LIGHT_GREY_BG,
    borderRadius: scale(30),
    margin: scale(20),
    shadowOpacity: 0.75,
    shadowRadius: scale(10),
    shadowColor: CONST.GREY_COLOR,
    shadowOffset: { height: 5, width: 5 },
    elevation: 5,
  },
  listStyle: {
    flex: 1,
    paddingHorizontal: 20
  },
  cellContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    height: verticalScale(140),
    marginTop: verticalScale(20),
    backgroundColor: '#ed9121',
    opacity: 0.6,
    borderRadius: scale(5),
    padding: scale(5)
  },
  imageStyle: {
    height: verticalScale(130),
    width: scale(110),
    backgroundColor: '#ed9121',
  },
  description: {
    flex: 1,
    alignSelf: 'stretch',
    marginLeft: scale(5),
    paddingLeft: scale(5),
  },
  nameRow: {
    flexDirection: 'row',
    marginTop: 1,
  }
});
