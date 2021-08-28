import React from 'react'
import {Button, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import { Auth } from 'aws-amplify';
import { useEffect } from 'react';
import { useState } from 'react';
import {User} from '../types'

import { ButtonComponent, InputFieldComponent } from '../components';

const App = ( {route}:any ) => {

	console.log(route.params.userInfo)
	const [ user, setUser ] = useState<User>({
		attributes: {
			"email": "email",
			"email_verified": true,
			"sub": "sub",
			"custom:year": 0
		  },
		  "id": "id",
		  "username": "user"
	})
  	const [email, setEmail] = useState<string>("")
  	const [year, setYear] = useState<string>("0")
	console.log(typeof(year))

	const signOut = async () => {
		try {
			await Auth.signOut();
		} catch (error) {
			console.log('error signing out: ', error);
		}
	}

	const updateUser = async () => {
		console.log(typeof(year))
		const user = await Auth.currentAuthenticatedUser();
		await Auth.updateUserAttributes(user, {
			'email': email,
			'custom:year': year
		})
		.catch((err) => console.log("error updating user", err));
	}

	
	useEffect(() => {
		const user = route.params.userInfo;
		setUser(user);
		setEmail(user.attributes.email);
		setYear(user.attributes['custom:year']);
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Text style={styles.contentTitle}> Your Info: </Text>
			</View>

			<View style={styles.form}>
				<Text style={styles.contentInfo}> Enter new details to update email or year group </Text>

				<InputFieldComponent placeholder={user.attributes.email} onChangeText={(text) => setEmail(text)} />
				<InputFieldComponent placeholder={user.attributes['custom:year'].toString()} onChangeText={(text) => setYear(text)}/>
				<ButtonComponent title="Update Details" onPress={updateUser} />
			</View>
			

			<View>
				<ButtonComponent title="Sign Out" onPress={signOut} />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 50,
		height: '80%',
		justifyContent: 'space-between'
	},
	contentTitle: {
		// height: '20%',
		// backgroundColor: '#000',
		fontSize: 30,
		fontWeight: 'bold',
		padding: 10,
  	},
	contentInfo: {
		height: '10%',
		fontSize: 15,
		fontWeight: '900',
		marginLeft: 15
	},
	form:{
		justifyContent: 'center'
	}
});

export default App;
