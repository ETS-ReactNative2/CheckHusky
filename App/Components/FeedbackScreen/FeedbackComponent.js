import React, { Component } from 'react';
import {
  connect
} from 'react-redux';
import {
 View, Text, TouchableOpacity, Image, Button, TextInput, 
} from 'react-native';
import * as CONST from '../../Utils/Constants';
import { Rating, AirbnbRating } from 'react-native-ratings';
import NavigationService from '../../Services/NavigationService';
import styles from './styles';

class FeedbackComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbackText: '',
    };
  }

  componentDidUpdate(prevProps, prevState) {
  }

  ratingCompleted(rating) {
    console.log("Rating is: " + rating);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.headerContainer]}>
          <Text style={styles.text}>Favorites Screen</Text>
          <Text style={styles.textRate}>Please rate our product with the star</Text>
          <View style={styles.inputContainer}>
            <TextInput
              numberOfLines={2}
              rowSpan={2}
              blurOnSubmit
              onChangeText={(text) => this.setState({ translatedText: text })}
              onEndEditing={() => {}}
              onSubmitEditing={() => {}}
              style={styles.textInputContainer}
              bordered
              placeholder="How satisfied are you with the product...?"
              placeholderTextColor="#2B2D42"
              autoCorrect={false}
            />
          </View>
          <View style={styles.ratingContainer}>
            <Rating
              type="custom"
              ratingColor="#ed9121"
              ratingTextColor="#000000"
              ratingCount={5}
              startingValue={1}
              imageSize={60}
              showRating
              onFinishRating={this.ratingCompleted}
            />
          </View>
          <TouchableOpacity
            style={styles.subsContainer}
            onPress={() => {}}
          >
            <Text style={styles.subsText}>SUBMIT</Text>
          </TouchableOpacity>
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
)(FeedbackComponent);
