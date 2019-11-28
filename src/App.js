/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import 'react-native-gesture-handler';
import AppNavigator from './screens/AppNavigator';

const App = () => {
  return(
    <SafeAreaView style={{flex: 1}}>
      <AppNavigator/>
    </SafeAreaView>
  )
}

// const styles = StyleSheet.create({

// });

export default App;
