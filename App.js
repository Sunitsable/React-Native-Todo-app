import React, { useState } from 'react';
//import { StatusBar } from 'expo-status-bar';
import { Alert, FlatList, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Listss from './components/Listss';



export default function App() {
  // const [name, setName] = useState('sunit');
  const [todos,setTodo]=useState([
    {text:'Do React native playlist',key:'1'},{text:'Do machine learning theory',key:'2'},{text:'Do blockchain projects',key:'3'}
  ]);
  const pressHandler=(key)=>{
    setTodo((prev)=>{
      return prev.filter(todo=> todo.key !=key);}
    )
  }
  const submitHandler=(text)=>{
    if(text.length>3){
        setTodo((prev)=>{
          return [{text:text,key:Math.random.toString()},
            ...prev
          ]
        })
      }else{
        Alert.alert('OOPS!','Task should be more than 3 characters.',[
          {text:'Understood',onclick:()=>console.log(text)}
        ]);
      }
  }
  
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss()
    }}>
    <View style={styles.container}>
      <Header/>

      <View style={styles.content}>
        <Listss submitHandler={submitHandler}/>
        <View style={styles.list}>
            <FlatList
             data={todos} renderItem={({item})=>(<TodoItem item={item} pressHandler={pressHandler}/>)}   />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  content:{
    padding:40
  },
  list:{
    marginTop:20
  }
  
  
});
