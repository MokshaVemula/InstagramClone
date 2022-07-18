import React from "react";
import {View, Text, SafeAreaView, ScrollView} from 'react-native'
import Header from "./Header";
import {Stories} from "./Stories";
import { POSTS } from "./Post";
import {Post} from "./Post";




const Home = () =>{
  
  return(
    <SafeAreaView style={{backgroundColor:'black', flex:1}}>
        <Header />
        <Stories />
        <ScrollView>
          {
            POSTS.map((post,index)=>(
              <Post post={post} key={index}/>
            ))
          }
        </ScrollView>
    </SafeAreaView>
  )
}

export default Home