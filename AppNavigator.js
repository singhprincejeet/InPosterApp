import { createStackNavigator } from 'react-navigation-stack';

import PreviewScreen from './app/views/PreviewScreen';
import FormScreen from './app/views/FormScreen';

const AppNavigator = createStackNavigator({
  Home: { screen: FormScreen },
  Form: { screen: FormScreen },
  Image: { screen: PreviewScreen },
});

export default AppNavigator;
