import {StackNavigator} from 'react-navigation';
import React, {Component} from 'react';
/*
import {ActivityIndicator,SectionList,FlatList,ScrollView, Platform, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, TouchableNativeFeedback, Button, Alert, Image, StyleSheet, Text, TextInput, View } from 'react-native';

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

*/


/*
			<Greeting lang='Español'/>
			<Blink textstring='Como estas'/>

			<PizzaTranslator/>
			<Text style={styles.blue}> Blue text </Text>
			<Text style={[styles.big, styles.red]}> Red Text </Text>
*/


/*
class HomeScreen extends React.Component {
	render() {
		let pic = {
			uri: 'https://chewie-lin.me/lt.png'
		};
		return (
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

class DetailsScreen extends React.Component {
	render() {
		return (
			<ScrollView >
			<View style={styles.box1} />
			<View style={styles.box2} />
			<View style={styles.box3} />
			<Touchables/>
			<FlatListBasics/>
			<SectionListBasics/>
			<Button
			title="Go back"
			onPress={() => this.props.navigation.goBack()}
			/>
			</ScrollView>
		);
	}
}
*/

/*
class FlatListBasics extends Component {
	constructor(props){
		super(props);
		this.state={isLoading:true}
	}

	componentDidMount() {
		return fetch('https://facebook.github.io/react-native/movies.json')
			.then((response) => response.json())
			.then((responseJson) => this.setState({
				isLoading:false,
				data: responseJson.movies,
			})
			)
			.catch((error) => {
				console.error(error);
			});
	}

	render() {
		if (this.state.isLoading){
			return(
				<View style={{flex: 1, padding: 20}}>
				<ActivityIndicator/>
				</View>
			)
		}
		return (
			<View style={styles.container}>
			<FlatList
			data={this.state.data}
			renderItem={({item}) => <Text style={styles.item}>{item.title}</Text>}
			keyExtractor={(item,index)=>index}
			/>
			</View>
		);
	}
}

class SectionListBasics extends Component {
	render() {
		return (
			<View style={styles.container}>
			<SectionList
			sections={[
				{title: 'D', data: ['Devin']},
				{title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
			]}
			renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
			renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
			keyExtractor={(item, index) => index}
			/>
			</View>
		);
	}
}

class Touchables extends Component {
	_onPressButton() {
		Alert.alert('You tapped the button!')
	}

	_onLongPressButton() {
		Alert.alert('You long-pressed the button!')
	}


	render() {
		return (
			<ScrollView>
			<TouchableHighlight onPress={this._onPressButton} underlayColor="white">
			<View style={styles.button}>
			<Text style={styles.buttonText}>TouchableHighlight</Text>
			</View>
			</TouchableHighlight>

			<TouchableOpacity onPress={this._onPressButton}>
			<View style={styles.button}>
			<Text style={styles.buttonText}>TouchableOpacity</Text>
			</View>
			</TouchableOpacity>

			<TouchableNativeFeedback
			onPress={this._onPressButton}
			background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
			<View style={styles.button}>
			<Text style={styles.buttonText}>TouchableNativeFeedback</Text>
			</View>
			</TouchableNativeFeedback>

			<TouchableWithoutFeedback
			onPress={this._onPressButton}
			>
			<View style={styles.button}>
			<Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
			</View>
			</TouchableWithoutFeedback>

			<TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
			<View style={styles.button}>
			<Text style={styles.buttonText}>Touchable with Long Press</Text>
			</View>
			</TouchableHighlight>

			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#fff',

		//alignItems: 'center',
		//justifyContent: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},

	big: {
		fontSize: 20,
	},

	blue: {
		color: 'blue',

	},

	red: {
		color: 'red',
	},

	box1: {
		width: 50,
		height: 50,
		backgroundColor: 'blue',
	},
	box2: {
		height: 100,
		backgroundColor: 'red',
	},
	box3: {
		height: 50,
		backgroundColor: 'yellow',
	},

  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },

  buttonText: {
    padding: 20,
    color: 'white'
  },

  container2: {
    paddingTop: 10,
    alignItems: 'center'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
});
*/

var home = require('./app/home.js');
var dd = require('./app/detail.js');

const RootStack = StackNavigator(
	{
		Home: { screen: home.HomeScreen, },
		Details: { screen: dd.DetailsScreen, },
	},

	{
		initialRouteName: 'Home',
		navigationOptions: {
			headerStyle: {
				backgroundColor: 'blue',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
			},
		},
	}
);

export default class App extends Component {
	render() {
		return <RootStack />;
	}
}
