import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import { ProfileBody,ProfileButtons } from './ProfileBody';
// import Entypo from 'react-native-vector-icons/Entypo';
import BottomTabView from './BottomTabView';
import { POSTS } from '../Home/Post';

const Profile = ({post}) => {
  let circuls = [];
  let numberofcircels = 10;

  for (let index = 0; index < numberofcircels; index++) {
    circuls.push(
      <View key={index}>
        {index === 0 ? (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              borderWidth: 1,
              opacity: 0.5,
              marginHorizontal: 5,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor:'white',
            }}>
            {/* <Entypo name="plus" style={{fontSize: 40, color: 'black'}} /> */}
          </View>
        ) : (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: 'white',
              opacity: 0.1,
              marginHorizontal: 5,
              borderColor:'white',
              borderWidth: 1,
            }}></View>
        )}
      </View>,
    );
  }

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'black'}}>
      <View style={{width: '100%', padding: 10}}>
        <ProfileBody
          name={POSTS[0].user}
          accountName={POSTS[0].user}
          profileImage={{uri:POSTS[0].imageUrl}}
          followers="3.6M"
          following="35"
          post="458"
        />
        <ProfileButtons
          id={0}
          name="Mr Peobody"
          accountName="mr_peobody"
          profileImage={require('../../images/logo.png')}
        />
      </View>
      <View>
        <Text
          style={{
            paddingHorizontal: 10,
            paddingBottom:10,
            letterSpacing: 1,
            fontSize: 14,
            color:'white'
          }}>
          Story Highlights
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            // paddingVertical: 5,
            paddingBottom:5,
            paddingHorizontal: 10,
          }}>
          {circuls}
        </ScrollView>
      </View>
      <BottomTabView /> 
    </View>
  );
};

export default Profile;