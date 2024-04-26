import React, { useState } from 'react';

import {  Button, StyleSheet,  TextInput, View } from 'react-native';

export default function Listss({submitHandler}){
        const [text,setText]=useState('');
        const changeHandler=(val)=>{
            setText(val);
        }
        return (
          <View>
            <TextInput
              placeholder='--add todos'
              onChangeText={(val)=>changeHandler(val)}
              style={styles.input}
            
            />
            <Button onPress={()=>submitHandler(text)} title='add todo' color='coral'/>
          </View>
            
            
        )
}


const styles=StyleSheet.create({
      input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
      }
})