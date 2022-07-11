import React from "react";
import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import Stories from "./Stories";
const Header = () =>{
  return(
      <View>
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={require('../../images/logo.png')} style={styles.logo}/>
            </TouchableOpacity>
            <View style={styles.IconContainer}>
            <TouchableOpacity>
                <Icon style = {styles.icon} name = "add-circle-outline" size = {30} color = "#fff" />
            </TouchableOpacity> 
            <TouchableOpacity>
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>11</Text>
                </View>
                <Icon style = {styles.icon} name = "chatbubble-ellipses-outline" size = {30} color = "#fff" />
            </TouchableOpacity>     
            </View>
            
        </View>
        
    </View>
    
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        marginHorizontal:10
    },
    logo:{
        width:150,
        height:80,
        resizeMode:'contain',
        
    },
    IconContainer:{
        flexDirection:'row',
        color:'white'
    },
    icon:{
        width:40,
        height:40,
        marginLeft:10
    },
    badge:{
        position:'absolute',
        backgroundColor:'green',
        right:-0.5,
        top:-5,
        borderRadius:25,
        width:26,
        height:19,
        alignItems:'center',
        justifyContent:'center',
        zIndex:100
    },
    badgeText:{
        color:'white',
        fontWeight:'600'
    },
})