import React from 'react';
import { View, TextInput, Picker, Keyboard, Text } from 'react-native';

import styles from '../assets/styles'

export default class FooterTextFormComponent extends React.Component {
  render() {
    let footerTextErrorText = (this.props.footerTextError !== undefined) && (
      <Text style={styles.error}>{this.props.footerTextError}</Text>
    )

    let footerAlignErrorText = (this.props.footerAlignError !== undefined) && (
      <Text style={styles.error}>{this.props.footerAlignError}</Text>
    )

    let footerFontSizeErrorText = (this.props.footerFontSizeError !== undefined) && (
      <Text style={styles.error}>{this.props.footerFontSizeError}</Text>
    )
    return (
      <View style={styles.sectionContainer}>
        <View style={styles.textInput}>
          <TextInput
            placeholder="Footer text"
            editable
            value={this.props.footerText}
            onChangeText={this.props.handleFooterTextChange}
          />
        </View>
        {footerTextErrorText}
        <View style={styles.spacedArroundRow} >
          <View style={styles.textInput}>
            <TextInput
              placeholder="Footer font size"
              editable
              value={this.props.footerFontSize}
              onChangeText={this.props.handleFooterFontSizeChange}
              keyboardType={'numeric'}
            />
          </View>
          <View style={styles.picker} >
            <Picker
              style={{ width: 182 }}
              selectedValue={this.props.footerAlign}
              onValueChange={this.props.handleFooterAlignChange}>
              <Picker.Item label="Footer font align" value="0" disabled color='#BEBEBE' />
              <Picker.Item label="Center" value="center" />
              <Picker.Item label="Left" value="left" />
              <Picker.Item label="Right" value="right" />
            </Picker>
          </View>
        </View>
        {footerFontSizeErrorText}
        {footerAlignErrorText}
      </View>
    )
  }
}