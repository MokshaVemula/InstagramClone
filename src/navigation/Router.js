import React from "react";
import {Image} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/MaterialIcons'
import Home from "../components/Home/Home";
import Reel from '../components/reel/Reel'
import Activity from '../components/notification/Notification.'
import Search from '../components/search/Search'
import Profile from '../components/Profile/Profile'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import EditProfile from "../components/Profile/EditProfile";
import FriendProfile from "../components/notification/FriendProfile";

const Tab = createBottomTabNavigator()

const BottomTabNavigation = () =>{
    return(
        
            <Tab.Navigator screenOptions={{headerShown:false, tabBarShowLabel:false, }} 
                tabBarOptions={{activeBackgroundColor: 'black', inactiveBackgroundColor: 'black',}}
            >
                <Tab.Screen name="Home" component={Home} options={{tabBarIcon:()=>(<Icon name='home-outline' color='white' size={30}/>)}} />
                <Tab.Screen name="Search" component={Search} options={{tabBarIcon:()=>(<Icon name='search' color='white' size={30}/>)}}/>
                <Tab.Screen name="Reel" component={Reel} options={{tabBarIcon:()=>(<Icon name="caret-forward-circle-outline" color='white' size={30}/>)}}/>
                <Tab.Screen name="Activity" component={Activity} options={{tabBarIcon:()=>(<Icon name='heart-outline' color='white' size={30}/>)}}/>
                <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon:()=>(<Image source={{uri:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'}} style={{height:35, width:35, borderRadius:18, borderWidth:2,borderColor:'white', marginTop:3}}/>)}}/>
            </Tab.Navigator>
        
    )
}

const Authentication = () =>{
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='Register' component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


const HomeStack = () =>{
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                headerShown: false,
                }}>
                <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
                <Stack.Screen name="FriendProfile" component={FriendProfile} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export {HomeStack, Authentication}