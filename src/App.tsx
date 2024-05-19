import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import AuthScreen from './screens/Login';
import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './redux/store';
import ProductList from './screens/ProductList';
import DrawerExample from './examples/DrawerExample';
import MyTopTabs from './examples/TopTagExample';
import MyBottomTabs from './examples/BottomTabExample';
import MultipleErrorDisplay from '@components/error_display/MultipleErrorDisplay';
import ErrorProvider from '@components/error_display/ErrorDisplay';
import LoadingModalProvider from '@components/loading_display/LoadingDisplay';
import MainNavigator from './navigator/MainNavigator';
const App = () => {
  return (
    <LoadingModalProvider>
      <ErrorProvider>
        <SafeAreaView style={{flex: 1}}>
          {/* <AuthScreen /> */}
          {/* Uncomment below productlist component to check createAsyncThunk */}
          {/* <ProductList />  */}
          {/* <DrawerExample /> */}
          {/* <MyTopTabs /> */}
          {/* <MyBottomTabs /> */}
          <MainNavigator />
        </SafeAreaView>
      </ErrorProvider>
    </LoadingModalProvider>
  );
};

const Main = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </StoreProvider>
  );
};

export default Main;
