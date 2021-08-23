import React from 'react'
import {Button, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import { Auth } from 'aws-amplify';
import { useEffect } from 'react';
import { useState } from 'react';



const App = () => {

  const [user, setUser] = useState({
    "attributes": {
      "email": "email",
      "email_verified": true,
      "sub": "id"
    },
    "id": "id",
    "username": "username"
  })

  async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }

  const updateUser = async () => {
    const user = await Auth.currentAuthenticatedUser();
    await Auth.updateUserAttributes(user, {
      'year': '5'
    })
    .catch((err) => console.log("error updating user", err));
  }

  useEffect(() => {
    Auth.currentUserInfo()
    .then((user) => setUser(user))
    .catch((err) => console.log("error getting details", err))
    .finally(() => console.log(user));
  }, []);

  return (
    <SafeAreaView>
        <Text>
          { user.attributes.email }
        </Text>
        <Button title="update" onPress={updateUser}></Button>

        <Button title="signout" onPress={signOut}></Button>
    </SafeAreaView>
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

export default App;
