/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <Text style={styles.font1}>1 - Font Sample 123456 JKLIG</Text>
            <Text style={styles.font2}>2 - Font Sample 123456 JKLIG</Text>
            <Text style={styles.font3}>3 - Font Sample 123456 JKLIG</Text>
            <Text style={styles.font4}>4 - Font Sample 123456 JKLIG</Text>
            <Text style={styles.font5}>5 - Font Sample 123456 JKLIG</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  font1: {
    fontFamily: 'OpenSans-BoldItalic',
    fontSize: 24,
    color: Colors.black,
  },
  font2: {
    fontSize: 24,
    fontStyle: 'italic',
    color: Colors.black,
  },
  font3: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.black,
  },
  font4: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  font5: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
