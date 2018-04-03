import {StackNavigator} from 'react-navigation';
import React, {Component} from 'react';
import {HomeScreen} from './app/home';
import {DetailsScreen} from './app/detail';

const RootStack = StackNavigator(
	{
		Home: { screen: HomeScreen, },
		Details: { screen: DetailsScreen, },
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
