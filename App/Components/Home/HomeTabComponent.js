import React, { Component } from 'react';
import {
  View, Text, FlatList, Image
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import I18n from '../../i18n/index';
import styles from './styles';

export default class HomeTabComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.dummyData = [
      {
        id: 314,
        name: 'BUDWEISER',
        brand: 'BUDWEISER',
        category: 'Hard',
        price: '$23',
        quantity: '1000ml',
        rating: 5,
        url: ''
      },
      {
        id: 315,
        name: 'TSINGTAO',
        brand: 'TSINGTAO',
        category: 'Hard',
        price: '$20',
        quantity: '1000ml',
        rating: 4,
        url: ''
      },
      {
        id: 316,
        name: 'BUD LIGHT',
        brand: 'BUD LIGHT',
        category: 'Hard',
        price: '$18',
        quantity: '1000ml',
        rating: 4,
        url: ''
      },
      {
        id: 317,
        name: 'SKOL',
        brand: 'SKOL',
        category: 'Soft',
        price: '$16',
        quantity: '1000ml',
        rating: 3,
        url: ''
      },
      {
        id: 318,
        name: 'HEINEKEN',
        brand: 'HEINEKEN',
        category: 'Soft',
        price: '$13',
        quantity: '1000ml',
        rating: 3,
        url: ''
      },
      {
        id: 319,
        name: 'CORONA',
        brand: 'CORONA',
        category: 'Light',
        price: '$10',
        quantity: '1000ml',
        rating: 1,
        url: ''
      },
    ];
  }

  renderCell({ item }) {
    const {
      id, name, brand, category, quantity, price, rating
    } = item;
    const overallRating = [1, 2, 3, 4, 5];
    return (
      <View style={styles.cellContainer}>
        <Image
          style={styles.imageStyle}
          source={{ uri: `https://picsum.photos/id/${id}/200/200` }}
        />
        <View style={styles.description}>
          <View style={styles.nameRow}>
            <Text style={styles.text}>
              {I18n.t('nameText')}
                :
            </Text>
            <Text style={styles.text}>
              {name}
            </Text>
          </View>
          <View style={styles.nameRow}>
            <Text style={styles.text}>
              {I18n.t('brand')}
                :
            </Text>
            <Text style={styles.text}>
              {brand}
            </Text>
          </View>
          <View style={styles.nameRow}>
            <Text style={styles.text}>
              {I18n.t('category')}
                :
            </Text>
            <Text style={styles.text}>
              {category}
            </Text>
          </View>
          <View style={styles.nameRow}>
            <Text style={styles.text}>
              {I18n.t('quantity')}
                :
            </Text>
            <Text style={styles.text}>
              {quantity}
            </Text>
          </View>
          <View style={styles.nameRow}>
            <Text style={styles.text}>
              {I18n.t('price')}
                    :
            </Text>
            <Text style={styles.text}>
              {price}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              {overallRating.map((index) => {
                return (
                  (index <= rating) ? <FontAwesome name="star" size={20} key={index} /> : <FontAwesome name="star-o" size={20} key={index} />
                );
              })}
            </View>
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.headerContainer]}>
          <Text style={styles.screenText}>{I18n.t('homeScreen')}</Text>
          <FlatList
            style={styles.listStyle}
            keyExtractor={(item, index) => index.toString()}
            data={this.dummyData}
            renderItem={(item) => this.renderCell(item)}
          />
        </View>
      </View>

    );
  }
}
