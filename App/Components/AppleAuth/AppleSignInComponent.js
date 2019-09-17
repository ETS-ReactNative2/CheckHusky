import React from 'react';
import {
  Text, View, TouchableOpacity
} from 'react-native';
import styles from './styles';

export default class AppleSignInComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.buttonStyle}>
        <TouchableOpacity
          onPress={() => console.log('ok')}
        >
          <Text style={styles.textStyle}>Login With Apple</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
