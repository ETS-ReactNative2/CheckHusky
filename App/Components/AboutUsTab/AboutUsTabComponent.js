import React from 'react';
import { Text, View } from 'react-native';
import Style from './styles';

export default class AboutUsTabComponent extends React.Component {
    render() {
        return (
            <View style={Style.container}>
                <Text>
                    {'About Us Tab'}
                </Text>
            </View>
        )
      }
}
