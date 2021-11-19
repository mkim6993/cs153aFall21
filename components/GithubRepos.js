import React, { useState, useEffect } from "react";
import { Button, Text, TextInput, View, FlatList,
         SafeAreaView, StyleSheet, StatusBar, ScrollView } from "react-native";

const GitRepo = (props) => {
  const [showHide, setShowHide] = useState('show repositories');
  const [viewList, setViewList] = useState(false);


  const [loading, setLoading] = useState(true);
  const [id, setId] = useState('');
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const getGitData = async (id) => {
    try {
      let result = await fetch('https://api.github.com/users/'+id+'/repos');
      let gdata = await result.json();
      gdata = gdata.sort(); // idk why you have to return 1 or -1
      setData(gdata);
      setLoading(false);
    } catch(e) {
      console.log('error in getGitData: ${JSON.stringify(e)}');
    }
  }

  const changeShowHide = (text) => {
    if (text !== ''){
      if (showHide === 'show repositories') {
        setShowHide('hide repositories');
        setViewList(true);
      }
    }
  }

  const remList = () => {
    if (showHide === 'hide repositories') {
      setShowHide('show repositories');
      setViewList(false);
    }
  }

  useEffect(() => {
    getGitData(id);
  }, [id]);



  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={{fontSize: 20}}>{item['name']}</Text>
     </View>
  )}

  return (
    <View style={styles.outer}>
      <SafeAreaView style={styles.header}>
        <Text style={{fontSize: 40, color: 'red', margin: 25}}>Github Viewer</Text>
      </SafeAreaView>
      <View style={styles.userIDInput}>
        <Text style={{fontSize: 40}}>github Id:</Text>
        <TextInput
          placeholder='userid'
          style={{fontSize: 40}}
          onChangeText={text => {setText(text)}}
          />
      </View>
      <Text
        style={{color: 'blue', fontSize: 20, marginTop: 5, marginLeft: 10}}
        onPress={() => {  setId(text);
                          changeShowHide(text);
                          remList()}}>{showHide}</Text>
      <SafeAreaView style={styles.listView}>
      {viewList && (
          <FlatList
            data={ data }
            renderItem={ renderItem }
            keyExtractor={ item => item.id.toString()}
          />
      )}
      </SafeAreaView>
      <View style={styles.debuggingBox}>
        <Text style={{fontSize: 20}}>
          DEBUGGING {'\n'}
          userid:{id} {'\n'}
          showReps:{viewList.toString()} {'\n'}
          repose.length = {data.length} {'\n'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    position: 'relative'
  },
  itemContainer: {
    backgroundColor: '#DCDCDC',
    padding: 15,
    margin: 20,
    marginRight: 50,
  },
  listView: {
    padding: 10,
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    position: 'relative',
    backgroundColor: 'white'
  },
  debuggingBox:{
    position: 'relative',
    bottom: 0,
    margin: 15
  }
});

export default GitRepo;
