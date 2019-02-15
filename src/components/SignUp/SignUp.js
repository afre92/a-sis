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

import SignUpForm from './SignUpForm'

class SignUp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../images/horizontal_logo.png')}
          />
          <Text style={styles.subText}>
            CREATE AN ACCOUNT
          </Text>
        </View>
        <View style={styles.formContainer}>
          <SignUpForm />
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}> CONTINUE </Text>
          </TouchableOpacity>
        </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '95%'
  },
  logoContainer: {
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    backgroundColor: '#813270',
    paddingVertical: 20,
    marginBottom: 20,
    // marginHorizontal: 20
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20
  },
  subText: {
    paddingTop: 30,
    textAlign: 'center',
    fontSize: 15
  },  
  logo: {
    width: 210,
    height: 60
  },
  formContainer: {
    paddingHorizontal: 20
  }

});

export default SignUp;