import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeScreenComponent from './HomeScreenComponent';

class HomeScreenContainer extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HomeScreenComponent {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreenContainer);
