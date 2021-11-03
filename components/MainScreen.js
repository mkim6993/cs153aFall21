import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View, Button, Picker} from 'react-native';

import NewProfile from './NewProfile.js';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Profile Select" component={HomeScreen}/>

        <Stack.Screen name="New Profile" component={NewProfile}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("Guest1");
  return (
    <View style={{flex: 1,
                  backgroundColor: 'black',
                  alignItems: 'center',
                  justifyContent: 'center'}}>

        <Text style={{fontSize: 32,
                      color: 'white'
                      }}>Profile</Text>

        <Picker
              selectedValue={selectedValue}
              style={{ height: 80, width: 150, margin: 10 }}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Guest1" value="guest1" />
          <Picker.Item label="Guest2" value="guest2" />
        </Picker>

        <View style={styles.buttonFrame}>


          <Button
           title="New Profile"
           onPress={() =>
              navigation.navigate('NewProfile')}/>

          <Button title="Continue"/>


        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profiles: {
    backgroundColor: 'white',
    width: 120,
    height: 300,
    borderBottomRightRadius: 5,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
  },
  buttonFrame: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default MyStack;
