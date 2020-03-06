import React, { FunctionComponent } from 'react';
import {StyleSheet, SafeAreaView, I18nManager} from 'react-native';
import {MainView} from './src/views/mainView/MainView';

I18nManager.forceRTL(true);

declare var global: {HermesInternal: null | {}};

interface Props {}

export const App: FunctionComponent<Props> = ({ }) => {

  return (
    <SafeAreaView style={styles.safeArea}>
      <MainView/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#f6faff'
  }
});

export default App;
