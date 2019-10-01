import { StyleSheet } from 'react-native'
import Fonts from './../../Theme/Fonts'
import ApplicationStyles from './../../Theme/ApplicationStyles'

export default StyleSheet.create({
    container: {
        ...ApplicationStyles.screen.container,
        flex:1,
        justifyContent:'center',
    },
    title: {
        ...Fonts.style.h2,
        textAlign: 'center',
        marginBottom: 10,
    },
    subsContainer: {
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
    emailInput: {
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        borderColor: '#d0d0d0',
        fontSize: 14,
        textAlign: 'left',
        padding: 10,
        paddingRight: 30,
    },
    crossIconContainer: {
        backgroundColor: 'transparent',
        height: 55,
        position: 'absolute',
        right: 0,
        top: 0
    },
    crossIcon: {
        padding: 10,
        height: 55,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backIconContainer: {
        marginTop: 15,
        marginBottom: 10,
        paddingLeft: 10,
        paddingVertical: 10,
        width: 50,
    },
    signInContainers: {
        flex: 1,
        justifyContent:'center',
        marginTop: 22,
        paddingHorizontal: 26
    },
    appleBtn: { 
        height: 44, 
        width: 200, 
    }
})
