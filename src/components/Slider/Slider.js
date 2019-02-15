'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Dimensions
} from 'react-native';

import Swiper from 'react-native-swiper'

const Slider = props => ( <View style={styles.container}>
		<Image style={styles.image} source={props.uri}/>
	</View>
)

const {width} = Dimensions.get('window')

export default class extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	imageSlider: [
	  		require('../../images/picture2.jpg'),
	  		require('../../images/picture2.jpg'),
	  		require('../../images/picture2.jpg')
	  	]
	  };
	}

  render() {
    return (
    		<Swiper>
    			{this.state.imageSlider.map((item, i) => <Slider uri={item} key={item} />)}
    		</Swiper>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		height: 300,
		justifyContent: 'center',
    alignItems: 'center',
	},
	image: {
		height: 200,
		width: '80%'
	}
});

