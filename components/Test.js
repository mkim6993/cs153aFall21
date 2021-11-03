
import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

// const App = () => {...}
export default function App() {
  return (
    <View style={styles.containerBig}>
      <View style={{backgroundColor: 'yellow', flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
        <Text style={styles.header}>Quiz 1a</Text>
        <Text style={styles.plainText}>
        CS153a Fall21
        Write the code for this App, including the Quiz1a title and this text! The layout is five units high and 3 units wide
        </Text>
      </View>
      <View style={{backgroundColor: 'white', flex: 1, justifyContent: 'space-around', flexDirection: 'row', alignItems:'center'}}>
        <Text style={styles.plainText}>Choose your gift by pressing the button</Text>
        <Button title='THIS IS A BIG GREEN BUTTON!' style={styles.buttonGreen}/>
      </View>
      <View style={styles.bigBox}>
        <View style={{flex: 1, backgroundColor:'lightgreen'}}>lightgreen</View>
        <View style={styles.frenchFlag}>
          <View style={{flex: 1, backgroundColor: 'red'}}>red</View>
          <View style={{flex: 1, backgroundColor: 'white'}}>white</View>
          <View style={{flex: 1, backgroundColor: 'blue'}}>blue</View>
        </View>
        <View style={{flex: 1, backgroundColor:'lightgreen'}}>lightgreen</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBig: {
    flex: 1,
    flexDirection: 'column',
  },
  buttonGreen: {
    color: 'GREEN',
  },
  header: {
    fontSize: 64,
    color: 'black',
  },
  plainText: {
    fontSize: 20,
    color: 'black',
  },
  bigBox: {
    flex: 3,
    flexDirection: 'row',
  },
  frenchFlag: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flex:1,
    alignItems:'center',
    fontSize:64,
    padding:25,
    color:"red",
  },
});
