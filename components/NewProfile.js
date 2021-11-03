import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

export default function App() {
  //const [name, onChangeName] = React.useState("");

  return (
    <View>
        <TextInput onChangeName={onChangeName} value={name}/>
    </View>
  );
};

//export default NewProfile;
