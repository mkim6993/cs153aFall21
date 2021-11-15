import React, { useState, useEffect } from "react";
import { SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Text, TextInput, View } from "react-native";


const Github = () => {

  const [userid, setUserid] = useState('');
  const [showReps, setShowReps] = useState(false);
  const [loading,setLoading] = useState(true)
  const [data,setData] = useState([]);
  const [text, setText] = useState('');

  const getGithubData = async (userid) => {
    try{
      let result = await fetch('https://api.github.com/users/'+userid+'/repos')
      //let result = await fetch('https://www.cs.brandeis.edu/~tim/timgithub.json')
      let cdata = await result.json()
      cdata = cdata.sort()
      setData(cdata)
      setLoading(false)
    }catch(e){
      console.log(`error in getGithubData: ${JSON.stringify(e)}`)
    }

  }

  useEffect(() => {
    getGithubData(userid)
  }, [userid]);

  const renderItem = ({item}) => {
    return (
      <View style={{flexDirection:'row', backgroundColor:'lightgray', padding:10, alignItems:'center'}}>
        <Text style={{fontSize:22}}>{item.name}</Text>
     </View>
  )}

  const emptyList = [
  {
    name: 'NONE',
  },
  {
    name: 'NONE',
  },
  {
    name: 'NONE',
  },
  {
    name: 'NONE',
  },
  {
    name: 'NONE',
  },

];

  let showRepsView = "";
  if (showReps) {
    showRepsView =
    <View>
      <FlatList
        data={data.slice(0,30)}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </View>
  }
  else {
    showRepsView =
      <SafeAreaView>
      <FlatList
          data={emptyList}
          renderItem={renderItem}
          keyExtractor={item => item.name}
          />
      </SafeAreaView>
  }

  let showRepsText = "";
  if (showReps) {
    showRepsText = "hide repositories"
  }
  else {
    showRepsText = "show repositories"
  }

  let repoLength = 0;
  if (data.length == 0) {
    repoLength = 1;
  }
  else {
    repoLength = data.length
  }

  let showRepsTextDebug = "";
  if (showReps) {
    showRepsTextDebug = "showReps: true"
  }
  else {
    showRepsTextDebug = "showReps: false"
  }

  return (
    <View style={styles.container}>
      <View style={{flex:8}}>
        <View style={{flex:1, backgroundColor:'black', alignItems:'center', justifyContent:'center'}}>
          <Text style={{fontSize:28, color:'red'}}>
            Github Viewer
          </Text>
        </View>
        <View style={{flex:0.5, flexDirection:'row'}}>
          <View style={{flex:0.45}}>
            <Text style={{fontSize:28}}>github Id: </Text>
          </View>
          <View style={{flex:1}}>
            <TextInput
              style={{fontSize:28}}
              placeholder='userid'
              onChangeText={text => {setText(text)}}
            />
          </View>
        </View>
        <View style={{flex:1}}>
          <TouchableOpacity
            onPress={() => {setShowReps(!showReps); setUserid(text)}}
            >
            <Text style={{fontSize:18, color:'blue'}}>
              {showRepsText}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flex:4, backgroundColor:'red'}}>
          {showRepsView}
        </View>

        <View style={{flex:1}}>
          <Text>DEBUGGING:</Text>
          <Text>userid: {userid}</Text>
          <Text>{showRepsTextDebug}</Text>
          <Text>repos.length = {repoLength}</Text>
        </View>
      </View>
    </View>
  );



}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'stretch',
  },
});

export default Github
