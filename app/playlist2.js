import {StackNavigator} from 'react-navigation';
import React, {Component} from 'react';
import {ActivityIndicator,SectionList,FlatList,ScrollView, Platform, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, TouchableNativeFeedback, Button, Alert, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import {styles} from './my-config';

class Greeting extends Component {
   render(){
		return (
			<Text>You are learning {this.props.lang} !</Text>
		);
	}
}

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '', num: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text: text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>

      </View>
    );
  }
}

class Blink extends Component{

	constructor(props){
		super(props);
		this.state = {flag: true};
		setInterval( ()=>{
			this.setState( pstate => {
				return {flag: !pstate.flag}
			});
		}, 1000);
	}

	render(){
		let display;
		if (this.state.flag) 
		{ display = this.props.textstring} 
		else 
		{display = ' '}
		return(
			<Text>{display}</Text>
		);
	}
}

/*
			<Greeting lang='Español'/>
			<Blink textstring='Como estas'/>

			<PizzaTranslator/>
			<Text style={styles.blue}> Blue text </Text>
			<Text style={[styles.big, styles.red]}> Red Text </Text>
*/


class PlaylistScreen extends React.Component {
	static navigationOptions = ({ navigation, navigationOptions }) => {
		const { params } = navigation.state;
		return {
			title: params ? params.otherParam : 'Home',
			/* These values are used instead of the shared configuration! */
			headerStyle: {
				backgroundColor: navigationOptions.headerTintColor,
			},
			headerTintColor: navigationOptions.headerStyle.backgroundColor,
		};
	};

	render() {
		let pic = {
			uri: 'https://chewie-lin.me/lt.png'
		};
		return (
			/*<ScrollView style={styles.container}>*/
			<View style={styles.container}>
			<Text style={styles.big}>
			Language Transfer
			</Text>
			<Text> </Text>
			<Image source={pic} style={{width: 193, height: 110}}/>
			<Text> </Text>
			<Button
			title="Pick a Language"
			onPress={() => this.props.navigation.navigate('Details')}
			/>
			</View>
		);
	}
}


module.exports = {
	PlaylistScreen
}
