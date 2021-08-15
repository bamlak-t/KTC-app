import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import {withAuthenticator} from 'aws-amplify-react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';

import Amplify, { API, Auth, graphqlOperation } from 'aws-amplify';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);

import { Notice, Timetable, Homework } from './screens';
import { listNotices  } from './src/graphql/queries';
import { useEffect } from 'react';

const Tab = createBottomTabNavigator( );

const App = () => {

	// useEffect(() => {
	// 	timetable();
	// }, []);

	// const timetable = async() => {
	// 	try {
	// 		const notices = await API.graphql(graphqlOperation(listNotices));
	// 		const notiiceList = notices.data.listNotices.items;
	// 		// console.log(notices);
	// 		console.log(notiiceList);
	// 	} catch(e) {
	// 		console.log("error",e);
	// 	}
	// }

	return (    
		<NavigationContainer>
			<Tab.Navigator 
				initialRouteName="Notice"
				screenOptions={{
					"tabBarActiveBackgroundColor": "#FD5E53",
					"tabBarInactiveBackgroundColor": "#21BF73",
					"tabBarStyle": [
						{
							"display": "flex"
						},
						null
					]
				}}
			>
				<Tab.Screen name="Notice" component={Notice} options={ 
					({ route }) => ({ 
						tabBarShowLabel: false,
						headerStyle: styles.headerStyle,
						headerTitleStyle: styles.headerTitleStyle,
						tabBarIcon: ({ color, size }) => (
							<Image
								style={styles.tinyLogo}
								source={require('./assets/images/notice_icon.png')}
							/>
						),
					})
				}/>
				<Tab.Screen name="Timetable" component={Timetable} options={ 
					({ route }) => ({ 
						tabBarShowLabel: false,
						headerStyle: styles.headerStyle,
						headerTitleStyle: styles.headerTitleStyle,
						tabBarIcon: ({ color, size }) => (
							<Image
								style={styles.tinyLogo}
								source={require('./assets/images/timetable.png')}
							/>
						),
					})
				} />
				<Tab.Screen name="Homework" component={Homework} options={ 
					({ route }) => ({ 
						tabBarShowLabel: false,
						headerStyle: styles.headerStyle,
						headerTitleStyle: styles.headerTitleStyle,
						tabBarIcon: ({ color, size }) => (
							<Image
								style={styles.tinyLogo}
								source={require('./assets/images/homework.png')}
							/>
						),
					})
				}/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	tinyLogo: {
		height: 25,
		width: 25,

		// backgroundColor: '#21BF73'
	},
	headerStyle: {
		backgroundColor: '#FD5E53',
		
	},
	headerTitleStyle: {
		color: '#eee',
	}
});

export default withAuthenticator(App);
// export default App;
