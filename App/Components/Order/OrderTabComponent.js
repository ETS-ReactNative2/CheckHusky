import React, { Component } from 'react';
import {
  connect
} from 'react-redux';
import {
  View, Text, TouchableOpacity, Image, Button
} from 'react-native';
import I18n from '../../i18n/index';
import styles from './styles';

class OrderTabComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.headerContainer]}>
          <Text style={styles.text}>{I18n.t('orderScreen')}</Text>
        </View>
      </View>

    );
  }
}

function mapStateToProps(state) {
  const {} = state;
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderTabComponent);
