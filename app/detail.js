import {StackNavigator} from 'react-navigation';
import React, {Component} from 'react';
import {ActivityIndicator,SectionList,FlatList,ScrollView, Platform, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, TouchableNativeFeedback, Button, Alert, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import {styles} from './my-config';


/*
			<Greeting lang='Español'/>
			<Blink textstring='Como estas'/>

			<PizzaTranslator/>
			<Text style={styles.blue}> Blue text </Text>
			<Text style={[styles.big, styles.red]}> Red Text </Text>
*/

			/*
			<View style={styles.box1} />
			<View style={styles.box2} />
			<View style={styles.box3} />
			<Touchables/>
			*/

var cid = "UCY3M77wNeopjQbL9mpSVvLg";
var key = "AIzaSyAtD8CQ6nwo0xwGG4Kh1PE44_GCCej87rs";

class DetailsScreen extends React.Component {
	static navigationOptions = ({ navigation, navigationOptions }) => {
		const { params } = navigation.state;
		return {
			title: params ? params.otherParam : 'Languages',
			/* These values are used instead of the shared configuration! */
			headerStyle: {
				backgroundColor: navigationOptions.headerTintColor,
			},
			headerTintColor: navigationOptions.headerStyle.backgroundColor,
		};
	};

	render() {
		return (
			/*<SectionListBasics/>*/
			/*<ScrollView style={styles.container}>*/
			<ScrollView >
			<FlatListBasics navigation={this.props.navigation}/>
			<Button
			title="Go back"
			onPress={() => this.props.navigation.goBack()}
			/>
			</ScrollView>
		);
	}
}



class FlatListBasics extends Component {
	constructor(props){
		super(props);
		this.state={isLoading:true}
	}

	componentDidMount() {
		return fetch('https://www.googleapis.com/youtube/v3/playlists?maxResults=25&channelId='+cid+'&part=snippet%2CcontentDetails'+'&key='+key)
			.then((response) => response.json())
			.then((responseJson) => this.setState({
				isLoading:false,
				data: responseJson.items,
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
			renderItem={({item}) =>
				<Text
				style={styles.item}
				onPress={() => {
					this.props.navigation.navigate('Playlist', {
						playlistid: item.id,
						otherParam: item.snippet.title,
					});
				}}
				> {item.snippet.title} </Text>
			}
			keyExtractor={(item,index)=>index}
			/>
			</View>
		);
	}


}


			/*
			<FlatList
			data={this.state.data}
			renderItem={({item}) => <Button title={item.snippet.title} onPress={() => this.props.navigation.navigate('Playlist')} /> }
			//renderItem={({item}) => <Text style={styles.item}> {item.snippet.title} </Text>}
			//<Button title="Pick a Language" onPress={() => this.props.navigation.navigate('Details')} />
			keyExtractor={(item,index)=>index}
			/>
			*/

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

module.exports={
	DetailsScreen
}
