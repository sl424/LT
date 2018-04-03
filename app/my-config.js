import {StyleSheet} from 'react-native';

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
export {styles};
