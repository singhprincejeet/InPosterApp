import React from 'react';
import { View, TextInput, Picker, Keyboard, Text } from 'react-native';

import styles from '../assets/styles'

export default class BodyTextFormComponent extends React.Component {
  render() {
    let bodyTextErrorText = (this.props.bodyTextError !== undefined) && (
      <Text style={styles.error}>{this.props.bodyTextError}</Text>
    )

    let bodyAlignErrorText = (this.props.bodyAlignError !== undefined) && (
      <Text style={styles.error}>{this.props.bodyAlignError}</Text>
    )

    let bodyFontSizeErrorText = (this.props.bodyFontSizeError !== undefined) && (
      <Text style={styles.error}>{this.props.bodyFontSizeError}</Text>
    )

    return (
      <View style={styles.sectionContainer}>
        <View style={styles.textInput}>
          <TextInput
            multiline={true}
            numberOfLines={6}
            placeholder="Body text"
            value={this.props.bodyText}
            onChangeText={this.props.handleBodyTextChange}
            editable />
        </View>
        {bodyTextErrorText}
        <View style={styles.spacedArroundRow} >
          <View style={styles.textInput}>
            <TextInput
              placeholder="Body font size"
              editable
              value={this.props.bodyFontSize}
              onChangeText={this.props.handleBodyFontSizeChange}
              keyboardType={'numeric'}
            />
          </View>
          <View style={styles.picker} >
            <Picker
              style={{ width: 172 }}
              selectedValue={this.props.bodyAlign}
              onValueChange={this.props.handleBodyAlignChange}>
              <Picker.Item label="Body font align" value="0" disabled color='#BEBEBE' />
              <Picker.Item label="Center" value="center" />
              <Picker.Item label="Left" value="left" />
              <Picker.Item label="Right" value="right" />
            </Picker>
          </View>
        </View>
        {bodyFontSizeErrorText}
        {bodyAlignErrorText}
      </View>
    )
  }
}