import { StyleSheet } from 'react-native';
import Fonts from '../../Theme/Fonts';
import ApplicationStyles from '../../Theme/ApplicationStyles';
import scale, { verticalScale } from '../../Utils/scale';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    ...Fonts.style.h2,
    textAlign: 'center',
    marginBottom: scale(10)
  },
  subsContainer: {
    height: scale(55),
    backgroundColor: 'black',
    justifyContent: 'center',
    marginTop: scale(22)
  },
  subsText: {
    color: 'white',
    fontSize: scale(16),
    textAlign: 'center'
  },
  emailInput: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: scale(55),
    borderColor: '#d0d0d0',
    fontSize: scale(14),
    textAlign: 'left',
    padding: scale(10),
    paddingRight: scale(30)
  },
  crossIconContainer: {
    backgroundColor: 'transparent',
    height: scale(55),
    position: 'absolute',
    right: 0,
    top: 0
  },
  crossIcon: {
    padding: scale(10),
    height: scale(55),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backIconContainer: {
    marginTop: scale(15),
    marginBottom: scale(10),
    paddingLeft: scale(10),
    paddingVertical: scale(10),
    width: scale(50)
  },
  signInContainers: {
    flex: 1,
    justifyContent: 'center',
    marginTop: scale(22),
    paddingHorizontal: scale(26)
  },
  appleBtn: {
    height: scale(44),
    width: scale(200)
  },
  appleCont: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: scale(50),
    marginVertical: scale(10)
  }
});
