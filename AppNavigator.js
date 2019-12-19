import { createStackNavigator } from 'react-navigation-stack';

import PreviewScreen from './app/views/PreviewScreen';
import ImageScreen from './app/views/ImageScreen';
import FormScreen from './app/views/FormScreen';

const AppNavigator = createStackNavigator(
  {
    Home: ImageScreen,
    Form: FormScreen,
    Preview: PreviewScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default AppNavigator;
