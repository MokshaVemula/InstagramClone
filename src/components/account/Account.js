import React from "react";
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native'
import { useDispatch } from "react-redux";
import { getUserUid } from "../../redux/actions";

const Account = () =>{
    const dispatch = useDispatch()
    function signOut(){
        dispatch(getUserUid(''));
    }
    
    return(
        <View style={{flex:1,backgroundColor:'black', justifyContent:'center', alignItems:"center"}}>
            <TouchableOpacity style={[styles.input,{alignItems:'center', justifyContent:'center', borderRadius:10, backgroundColor:'#528AAE'}]} onPress={signOut}>
              <Text style={{color:'white', fontWeight:'bold'}}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Account

const styles = StyleSheet.create({

    input:{
        width:'90%',
        height:60,
        backgroundColor:'#424242',
        borderRadius:5,
        color:'white',
        marginBottom:20,
        padding:20
    }
})