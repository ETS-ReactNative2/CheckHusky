import { StyleSheet } from 'react-native'
import Fonts from '../../Theme/Fonts'
import ApplicationStyles from '../../Theme/ApplicationStyles'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    ...Fonts.style.h2,
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    ...Fonts.style.normal,
    textAlign: 'center',
    marginBottom: 5,
  },
  subsContainer: {
    margin:20,
    height: 55,
    backgroundColor: 'black',
    justifyContent: 'center',
    marginTop: 22,
  },
  subsText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  nameContainer: {
    margin:20,
    flexDirection: 'row',
  }
})
