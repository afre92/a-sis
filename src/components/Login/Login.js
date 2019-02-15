'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../images/horizontal_logo.png')}
          />
          <Text style={styles.subText}>
            CREATE AACCOUNT
          </Text>
        </View>
        <View style={styles.form}>
          
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}> CREATE ACCOUNT </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}> LOGIN </Text>
          </TouchableOpacity>
        </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  logoContainer: {
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 210,
    height: 60
  },
  welcomeImages: {
    flex: 1,
  },
  buttonContainer: {
    backgroundColor: '#813270',
    paddingVertical: 15,
    width: '90%',
    marginBottom: 20,
    marginHorizontal: 20
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 15
  },
  subText: {
    paddingTop: 30,
    textAlign: 'center',
    fontSize: 15
  }

});

export default Login;