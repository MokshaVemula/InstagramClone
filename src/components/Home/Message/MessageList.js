import React from "react";
import {Text, View, ScrollView,Image, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { USERS } from "../Stories";
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native";



const MessageList = () =>{
    const navigation = useNavigation()

    const List = ({image, user, name}) =>{
        return(
            <View style={{flexDirection:'row',alignItems:'center', padding:10, justifyContent:'space-between'}}>
                <View style={{flexDirection:'row',alignItems:'center', padding:10}}>
                    <Image source={{uri:image}} style={styles.img}/>
                    <View>
                        <Text style={{color:'white',}}>{user}</Text>
                        <Text style={{color:'white',}}>{name}</Text>
                    </View>
                </View>
                <Icon name='camera' color='white' size={30} />
            </View>
        )
    }

    
    return(
        <ScrollView style={{flex:1, backgroundColor:'black', padding:10}}>
            <Text style={{color:'white', fontWeight:'bold', fontSize:18, marginBottom:20}}>Messages</Text>
            {
                USERS.map((index, key)=>(
                    <TouchableOpacity onPress={()=>navigation.push('Message',{image:index.image, user:index.user, name:index.user})}>
                        <List image={index.image} user={index.user} name={index.name} key={key}/>
                    </TouchableOpacity>
                
                ))
            }
        </ScrollView>
    )
}

export default MessageList

const styles = StyleSheet.create({
    img:{
        height:60,
        width:60,
        borderRadius:30,
        marginRight:20
    }
})