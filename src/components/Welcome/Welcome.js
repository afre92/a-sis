'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../images/horizontal_logo.png')}
          />
          <Text style=''>
            Some random text goes here
          </Text>
        </View>
        <View style={styles.welcomeImages}>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}> Login </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}> Create Account </Text>
          </TouchableOpacity>



        </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 210,
    height: 70
  },
  welcomeImages: {
  },
  buttonContainer: {
    backgroundColor: '#813270',
    paddingVertical: 15,
    width: 300,
    marginBottom: 20
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 23
  }

});


export default Welcome;