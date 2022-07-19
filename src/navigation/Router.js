import React from "react";
import {Image} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons'
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
import UserPosts from "../components/Profile/UserPosts";
import Status from "../components/Home/Status";
import Message from "../components/Home/Message/Message";
import MessageList from "../components/Home/Message/MessageList";

const Tab = createBottomTabNavigator()

const BottomTabNavigation = () =>{
    return(
        
        <Tab.Navigator 
            screenOptions={({route})=>({
                headerShown:false,
                tabBarStyle:{backgroundColor:'black'},
                tabBarShowLabel: false,
                tabBarIndicatorStyle: {
                    backgroundColor: 'black',
                    height: 1.5,
                },
                tabBarIcon: ({focused, colour}) => {
                    let iconName;
                    if (route.name === 'Home') {
                      iconName = focused ? 'home' : 'home-outline';
                      colour =  'white';
                    } else if (route.name === 'Search') {
                      iconName = focused ? 'search' : 'search-outline';
                      colour = 'white'; 
                    } else if (route.name === 'Reel') {
                      iconName = focused ? 'caret-forward-circle' : 'caret-forward-circle-outline';
                      colour = 'white';

                    }else if (route.name==='Activity'){
                        iconName = focused ? 'heart':'heart-outline'
                        colour ='white'
                    }
                    return <Icon name={iconName} color={colour} size={30} />;
                  },
                
            })}

            
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Reel" component={Reel} />
            <Tab.Screen name="Activity" component={Activity}/>
            <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon:()=>(<Image source={{uri:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'}} style={{height:35, width:35, borderRadius:18, borderWidth:2,borderColor:'white', marginTop:3}}/>)}}/>
        </Tab.Navigator>

        //options={{tabBarIcon:()=>(<Icon name='home-outline' color='white' size={30}/>)}}
        //caret-forward-circle-outline
        //heart-outline
        
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
                <Stack.Screen name='Message' component={Message} />
                <Stack.Screen name='MessageList' component={MessageList} />
                <Stack.Screen name='UserPosts' component={UserPosts} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
                <Stack.Screen name="FriendProfile" component={FriendProfile} />
                <Stack.Screen name="Status" component={Status} />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export {HomeStack, Authentication}