import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {withAuthenticator} from 'aws-amplify-react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

import { Notice, Timetable, Homework } from './screens';

const Tab = createBottomTabNavigator();

const App = () => {
  return (    
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Notice">
        <Tab.Screen name="Notice" component={Notice} />
        <Tab.Screen name="Timetable" component={Timetable} />
        <Tab.Screen name="Homework" component={Homework} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollCointainer: {
    height: '100%',
    backgroundColor: '#EEEEEE'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

// export default withAuthenticator(App);
export default App;
