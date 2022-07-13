import React from 'react';
import {View, TextInput} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';

const SearchBox = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
        position: 'relative',
        backgroundColor:'black'
      }}>
      <Ionic
        name="search"
        style={{
          fontSize: 18,
          opacity: 0.8,
          position: 'absolute',
          color:'white',
          zIndex: 1,
          left: 25,
        }}
      />
      <TextInput
        placeholder="Search"
        placeholderTextColor="#909090"
        style={{
          width: '96%',
          backgroundColor: '#424242',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 15,
          padding: 4,
          paddingLeft: 40,
          color:'white'
          
        }}
      />
    </View>
  );
};

export default SearchBox;

