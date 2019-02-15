'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
	TextInput,
	Text
} from 'react-native';

class SignUpForm extends Component {
  render() {
    return (
      <View styles={styles.container}>
      	<View styles={styles.formGroup}>
					<Text styles={styles.inputLabel} >Full Name</Text>
      		<TextInput style={styles.input} />
      	</View>
      	<View styles={styles.formGroup}>
					<Text>Email</Text>
      		<TextInput style={styles.input} />
      	</View>
      	<View styles={styles.formGroup}>
					<Text>Password</Text> 
      		<TextInput secureTextEntry style={styles.input} />
      	</View>
      	<View styles={styles.formGroup}>
					<Text >Confirm Password</Text> 
      		<TextInput secureTextEntry style={styles.input} />
      	</View>
				<Text style={styles.subText}>
            TERMS OF SERVICE AND PRIVACY POLICY
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
 },
 input: {
  marginTop: 5,
 	height: 60,
 	backgroundColor: 'white',
 	marginBottom: 20,
	fontSize: 20,
	paddingHorizontal: 20,
	borderWidth: 2,
	borderColor: '#d6d7da',
 },
 formGroup: {
	borderWidth: 0.5,
	borderColor: '#d6d7da'
 },
 subText: {
	 textAlign: 'center',
   paddingBottom: 40,
   fontSize: 12
 },
 inputLabel: {
  paddingHorizontal: 10
 }
});


export default SignUpForm;