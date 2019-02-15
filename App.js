import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/components/Welcome/Welcome'
import SignUp from './src/components/SignUp/SignUp'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SignUp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




