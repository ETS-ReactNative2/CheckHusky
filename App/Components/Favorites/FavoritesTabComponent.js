import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity, Image, Button } from "react-native";
import styles from "./styles";

class FavoritesTabComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.headerContainer]}>
          <Text style={styles.text}>Favorites Screen</Text>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const {} = state;
  return {};
}

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesTabComponent);
