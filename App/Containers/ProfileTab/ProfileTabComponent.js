import React from 'react';
import { View, Text } from 'react-native';
import Style from './styles';

export default class ProfileTabContainer extends React.Component {
  render() {
    return (
        <View style={Style.container}>
            <Text>
                {'Profile Tab'}
            </Text>
        </View>
    )
  }
}
