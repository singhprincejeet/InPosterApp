import React, { Component } from 'react';
import { View, Button, Image } from 'react-native';

import ImageCropper from "react-native-android-image-cropper";

import styles from '../assets/styles'

export default class ImageScreen extends Component {
  state = { uri: '' }
  render() {
    let buttonsMarkup = this.getButtonsMarkup();
    let imageMarkup = (this.state.uri !== '')
      ? this.getImageMarkup()
      : null;
    return (
      <View style={styles.container}>
        {imageMarkup}
        {buttonsMarkup}
      </View >

    );
  }

  openPicker = () => {
    var options = {
      guideLines: "on-touch",
      cropShape: "rectangle",
      fixAspectRatio: true,
    }
    ImageCropper.selectImage(options, (response) => {
      if (response.uri !== undefined) {
        this.setState({ uri: response.uri })
      }
    });
  }

  getImageMarkup = () => {
    return (
      <View style={styles.previewImageContainer}>
        <Image
          style={styles.previewImage}
          source={{ uri: this.state.uri }}
        />
      </View>
    );
  };

  getButtonsMarkup = () => {
    var getImageButtonText = (this.state.uri) ? "Get another image" : "Get image"
    var useThisImageButtonMarkup = (this.state.uri)
      ? (
        <View style={styles.button}>
          <Button title="Use this image" onPress={() => this.goToFromScreen(this.state.uri)}></Button>
        </View>
      )
      : null;
    return (
      <View style={styles.spacedArroundRow} >
        <View style={styles.button}>
          <Button title="No image" onPress={() => this.goToFromScreen('')}></Button>
        </View>
        <View style={styles.button}>
          <Button title={getImageButtonText} onPress={this.openPicker}></Button>
        </View>
        {useThisImageButtonMarkup}
      </View>
    )
  }

  goToFromScreen = (uri) => {
    this.props.navigation.navigate('Form', {
      uri: uri
    });
  }
}