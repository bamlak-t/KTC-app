import React, {useState, useEffect} from 'react';
import { StyleSheet, Image } from 'react-native';
// import { withAuthenticator } from 'aws-amplify-react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { withAuthenticator  } from 'aws-amplify-react-native';

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);

import { Notice, Timetable, Homework, Profile } from './screens';
import { I18n } from 'aws-amplify';
import { SafeAreaView } from 'react-native-safe-area-context';

I18n.setLanguage('en');
const dict = {
     'en': {
         'Username': 'Email'
      }
}
I18n.putVocabularies(dict);

const Tab = createBottomTabNavigator();


const App = () => {


	return (
		<SafeAreaView>
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
						<Tab.Screen name="Profile" component={Profile} options={ 
							({ route }) => ({ 
								tabBarShowLabel: false,
								headerStyle: styles.headerStyle,
								headerTitleStyle: styles.headerTitleStyle,
								tabBarIcon: ({ color, size }) => (
									<Image
										style={styles.tinyLogo}
										source={require('./assets/images/profile.png')}
									/>
								),
							})
						}/>
					</Tab.Navigator>
				</NavigationContainer>
		</SafeAreaView>
	);
}

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

export default withAuthenticator(App, {
	signUpConfig: {
		hiddenDefaults: ['phone_number', 'email'],
	},

});
// export default withAuthenticator(App);
