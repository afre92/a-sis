'use strict';

import React, { Component } from 'react';
import Slider from '../Slider/Slider'

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions
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
          <Text style={styles.subText}>
            LOGINCreate a accountCREATE AACCOUNTExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          </Text>
        </View>
        <View style={styles.welcomeImages}>
          <Slider/>
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
const {width} = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  logoContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 210,
    height: 70
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
    fontSize: 20
  },
  subText: {
    padding: 20,
    textAlign: 'center'
  }

});


export default Welcome;