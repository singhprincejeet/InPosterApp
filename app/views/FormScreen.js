import React from 'react';
import { View, Text, Button, ToastAndroid } from 'react-native';

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
          <Text style={styles.title}>InPoster</Text>
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
          <View style={styles.button}>
            <Button title="Generate Picture" onPress={handleSubmit} />
          </View>
        </View>
          )}
      </Formik>
    );
  }

  handleSubmit = async (input) => {
    let imageGenerateService = new ImageGenerateService();
    try {
      let imagePath = await imageGenerateService.generate(input);
      this.goToImageScreen(imagePath);
    } catch (err) {
      ToastAndroid.show(`'Error =>' ${err}`, ToastAndroid.SHORT);
    }
  }

  goToImageScreen = (imagePath) => {
    this.props.navigation.navigate('Image', {
      path: imagePath
    });
  }
}
