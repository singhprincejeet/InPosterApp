import React, { Component } from 'react';
import { View, Image, Button, ToastAndroid } from 'react-native';

import Share from 'react-native-share';

import styles from '../assets/styles';

export default class ImageScreen extends Component {
  state = {path: ''}

  static getDerivedStateFromProps(props, state){
    const { navigation } = props;
    var path = 'file://' + navigation.getParam('path');
    state.path = path;
    return state;
  }

  render() {
    return (
      <View style={styles.imageScreenContainer}>
        <View style={styles.previewImageContainer}>
        <Image
        source={{ uri: this.state.path }}
        style={styles.previewImage}
      />
        </View>
        <View style={styles.button}>
          <Button title='Share' onPress={this.share}></Button>
        </View>
      </View>
    )
  };

   share = async() => {
    const shareOptions = {
      url: this.state.path,
      type: 'image/png',
      failOnCancel: false,
    };

    try {
      await Share.open(shareOptions);
    } catch (error) {
      ToastAndroid.show(`'Error =>', ${error}`, ToastAndroid.SHORT);
    }
  }
};
