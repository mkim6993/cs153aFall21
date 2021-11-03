import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View, Button, } from 'react-native';

// import FlexDemo1Screen from './FlexDemo1'
// import ShowProfile from './ShowProfile'
// import Login from './Login'
import Test from './Test.js'



const Stack = createNativeStackNavigator();

const MyStack = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          //options={{ title: 'Welcome' }}
        />

        // <Stack.Screen
        //   name="Login"
        //   component={Login}
        //   //options={{ title: 'Welcome' }}
        // />


        <Stack.Screen
          name="Test"
          component={Test}
          //options={{ title: 'Welcome' }}
        />

        <Stack.Screen name="Profile" component={ProfileScreen} />

      //  <Stack.Screen name="FlexDemo1" component={FlexDemo1Screen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};


const HomeScreen = ({ navigation }) => {
  return (
      <View style={{ flexDirection: 'row',
                     margin:"25px",
                     border:"thick solid black",
                     padding:'10px',
                     justifyContent: 'space-around', }}>

         // <Button
         //   title="Show Profile"
         //   onPress={() =>
         //     navigation.navigate('ShowProfile')
         //        // we're passing a parameter name:'Jane' to the Profile component!
         //   }
         // />
         //
         // <Button
         //   title="Login"
         //   onPress={() =>
         //     navigation.navigate('Login')
         //        // we're passing a parameter name:'Jane' to the Profile component!
         //   }
         // />
         //

        <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigation.navigate('Profile', { name: 'Jane', greeting:'Hi!' })
               // we're passing a parameter name:'Jane' to the Profile component!
          }
        />

        <Button
          title="Go to Tim's profile"
          onPress={() =>
            navigation.navigate('Profile', { name: 'Tim', greeting:'Konichi-wa' })
               // we're passing a parameter name:'Jane' to the Profile component!
          }
        />

        <Button
          title="Checkout my test!"
          onPress={() =>
            navigation.navigate('Test')
          }
        />
    </View>
  );
};

// ProfileScreen function is called with a JSON object
//  {navigation:..., route:...,  otherstuff}
const ProfileScreen = ({ navigation, route }) => {
  return <Text>{route.params.greeting}, this is {route.params.name}'s profile</Text>;
       // we're using the parameter name passed in from the HomeScreen
};

export default MyStack;
