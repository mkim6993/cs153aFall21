import React, { useState, useEffect } from "react";
import { Button, Text, TextInput, View, FlatList,
         SafeAreaView, StyleSheet, StatusBar, ScrollView, TouchableOpacity } from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios'

const GitRepo = () => {
  // {viewList && (
  //     <FlatList
  //       data={ data }
  //       renderItem={ renderItem }
  //       keyExtractor={ item => item.id.toString()}
  //     />
  // )}
  const appURL = 'https://glacial-hamlet-05511.herokuapp.com';
  const [data,setData] = useState([]);

  // const getNames = async () => {
  //   let res = await Axios.get('https://glacial-hamlet-05511.herokuapp.com/bboardNames');
  //   console.log('gettingNames= ');
  //   console.log(res)
  // }

  const getNames = async () => {
    let res = await Axios.post('https://glacial-hamlet-05511.herokuapp.com/posts');
    console.log('gettingNames= ');
    console.log(res)
  }






  const getCloudData = async () => {
    console.log('in getCloudData data=')
    let data = appURL;
    console.dir(data)

    let result = await Axios.post(appURL+'/bboardNames',data);
    console.log(`result=`)
    console.dir(result)
    const names =
       result.data.map(
          (x) => {return {id:x._id, book:JSON.parse(x.value)}})
    console.log('books=')
    console.dir(names)
  }

  return (
    <View style={styles.outer}>
      <SafeAreaView style={styles.header}>
        <Text style={{fontSize: 40, color: 'red', margin: 25}}>BBViewer</Text>
      </SafeAreaView>

      <View style={styles.buttonAndList}>
          <TouchableOpacity style={styles.buttonIt}>
            <Text style={{color: 'white', flexStrink: 1, fontSize: 15}} onPress={() => getNames()}>REFRESH BBOARDS</Text>
          </TouchableOpacity>
          <SafeAreaView style={styles.listView}>




          </SafeAreaView>
      </View>

      <View style={styles.userIDInput}>
        <Text style={{fontSize: 35}}>Selected bboard:</Text>
        <TextInput
          placeholder='userid'
          style={{fontSize: 40}}
          onChangeText={text => {setText(text)}}
          />
      </View>
      <SafeAreaView style={styles.listView}>



      </SafeAreaView>
      <View style={styles.debuggingBox}>
        <Text style={{fontSize: 20}}>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonIt: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  listContainer: {
    backgroundColor: 'green',

  },
  buttonAndList: {
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  header: {
    backgroundColor: 'black',
    padding: 30,
    alignItems: 'center',
    position:'relative'
  },
  outer: {
    flexDirection: 'column',
    bottom: 0,
    flex: 1,
    position: 'relative',
  },
  userIDInput: {
    flexDirection: 'row',
    position: 'relative',
    backgroundColor: 'orange',
  },
  itemContainer: {
    backgroundColor: '#DCDCDC',
    padding: 15,
    margin: 20,
  },
  listView: {
    padding: 10,
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  debuggingBox:{
    position: 'relative',
    bottom: 0,
    margin: 15
  }
});

export default GitRepo;
