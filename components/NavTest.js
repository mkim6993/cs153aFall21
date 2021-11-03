import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, } from 'react-native';

import TestScreen from './Test.js';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name = "Home"
          component = {HomeScreen}
          //option = {{ title: 'Welcome' }}
          />

          <Stack.Screen name='Profile' component={ProfileScreen} />

          <Stack.Screen name='TestScreen' component={TestScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{  flexDirection: 'row',
                    margin: '25px',
                    border: 'thick solid black',
                    pading: '10px',
                    justifyContent: 'space-around',}}>

      <Button
        title="Annah bae"
        onPress={() =>
          navigation.navigate('Profile', {name: 'Annah', greeting: 'Hey.'})
        }
      />

      <Button
        title="This is MinSung's page"
        onPress={() =>
          navigation.navigate('Profile', {name: 'MinSung', greeting: 'sup dude.'})
        }
      />

      <Button
        title="look at my late quiz"
        onPress={() =>
          navigation.navigate('Test')
        }
      />
    </View>
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return <Text>{route.params.greeting}, this be {route.params.name}'s profile</Text>;
}

export default MyStack;
