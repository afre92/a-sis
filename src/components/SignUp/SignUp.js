'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';

import SignUpForm from './SignUpForm'

class SignUp extends Component {
  render() {
    return (
      <View style={styles.container}>
       <KeyboardAvoidingView behavior='position'>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('../../images/horizontal_logo.png')}
            />
            <Text style={styles.subText}>
              Create an Account
            </Text>
          </View>
          <View style={styles.formContainer}>
            <SignUpForm />
          </View>
        </KeyboardAvoidingView>
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
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    backgroundColor: '#813270',
    paddingVertical: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20
  },
  subText: {
    paddingTop: 30,
    paddingBottom: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600'

  },  
  logo: {
    width: 210,
    height: 60
  },
  formContainer: {
    paddingHorizontal: 15
  }

});

export default SignUp;