import { string, object, number } from 'yup';
export default textFormValidation = object().shape({
  bodyText: string()
    .label('Body text')
    .required(),
  bodyFontSize: number()
    .label('Body font size')
    .required()
    .positive()
    .integer(),
  bodyAlign: string()
    .test("selectAlignValue", "Body align is a required field", val => {
      return val !== "0";
    }),
  footerText: string()
    .label('Footer text')
    .required(),
  footerFontSize: number()
    .label('Footer font size')
    .required()
    .positive()
    .integer(),
  footerAlign: string()
    .test("selectAlignValue", "Footer align is a required field", val => {
      return val !== "0";
    }),
  textColor: string()
    .label('Text color')
    .required(),
})
