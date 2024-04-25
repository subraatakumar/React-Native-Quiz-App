import MyApp from './src/App';
import {NavigationContainer} from '@react-navigation/native';
import Config from 'react-native-config';
const App = () => {
  console.log('API Key retrived from .env file :', Config.API_KEY);
  return (
    <NavigationContainer>
      <MyApp />
    </NavigationContainer>
  );
};
export default App;
