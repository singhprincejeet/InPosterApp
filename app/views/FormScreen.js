import React from 'react';
import { View, Text, TextInput, Button, ToastAndroid } from 'react-native';

import { Formik } from 'formik';

import ImageGenerateService from '../services/ImageGenerateService';
import styles from '../assets/styles';
import textFormValidation from '../assets/validations/textFormValidation'

import BodyTextFormComponent from '../components/BodyTextFormComponent';
import FooterTextFormComponent from '../components/FooterTextFormComponent';

export default class FormScreen extends React.Component {
  initialValues = {
    bodyText: '',
    bodyAlign: '0',
    bodyFontSize: '',
    footerText: '',
    footerAlign: '0',
    footerFontSize: '',
    textColor: '',
  }

  render() {
    return (
      <Formik
        initialValues={this.initialValues}
        onSubmit={(values) => this.handleSubmit(values)}
        validationSchema={textFormValidation}
      >
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
        }) => (<View style={styles.container}>
          <BodyTextFormComponent
            bodyText={values.bodyText}
            bodyTextError={errors.bodyText}
            bodyAlign={values.bodyAlign}
            bodyAlignError={errors.bodyAlign}
            bodyFontSize={values.bodyFontSize}
            bodyFontSizeError={errors.bodyFontSize}
            handleBodyTextChange={handleChange('bodyText')}
            handleBodyAlignChange={handleChange('bodyAlign')}
            handleBodyFontSizeChange={handleChange('bodyFontSize')}
          />
          <FooterTextFormComponent
            footerText={values.footerText}
            footerTextError={errors.footerText}
            footerAlign={values.footerAlign}
            footerAlignError={errors.footerAlign}
            footerFontSize={values.footerFontSize}
            footerFontSizeError={errors.footerFontSize}
            handleFooterTextChange={handleChange('footerText')}
            handleFooterAlignChange={handleChange('footerAlign')}
            handleFooterFontSizeChange={handleChange('footerFontSize')}
          />
          <View style={styles.sectionContainer}>
            <View style={styles.textInput}>
              <TextInput
                placeholder="Text color"
                editable
                value={values.textColor}
                onChangeText={handleChange('textColor')}
              />
            </View>
            <Text style={styles.error}>{errors.textColor}</Text>
          </View>
          <View style={styles.button}>
            <Button title="Generate Picture" onPress={handleSubmit} />
          </View>
        </View>
          )}
      </Formik>
    );
  }

  handleSubmit = async (input) => {
    var image_uri = this.props.navigation.getParam('uri');
    let imageGenerateService = new ImageGenerateService();
    try {
      let imagePath = await imageGenerateService.generate(input, image_uri);
      this.goToPreviewScreen(imagePath);
    } catch (err) {
      ToastAndroid.show(`'Error =>' ${err}`, ToastAndroid.SHORT);
    }
  }

  goToPreviewScreen = (imagePath) => {
    this.props.navigation.navigate('Preview', {
      path: imagePath
    });
  }
}
