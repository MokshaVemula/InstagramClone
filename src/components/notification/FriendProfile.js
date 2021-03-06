import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ProfileBody,ProfileButtons } from '../Profile/ProfileBody';
import { FriendsProfileData } from './FriendsProfileData';
import { USERS } from '../Home/Stories';

const FriendProfile = ({route, navigation}) => {
  const {name, profileImage, follow, post, followers, following} = route.params;
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        padding: 10,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic name="arrow-back" style={{fontSize: 20, color: 'white'}} />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '92%',
          }}>
          <Text style={{fontSize: 15, marginLeft: 10, fontWeight: 'bold', color:'white'}}>
            {name}
          </Text>
          <Feather
            name="more-vertical"
            style={{fontSize: 20, color: 'white'}}
          />
        </View>
      </View>
      {/* <ProfileBody
        name={name}
        profileImage={profileImage}
        post={post}
        followers={followers}
        following={following}
      /> */}
      

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingVertical: 20,
        }}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image
            source={{uri:profileImage}}
            style={{
              resizeMode: 'cover',
              width: 80,
              height: 80,
              borderRadius: 100,
              borderColor:'white',
              borderWidth:1
            }}
          />
          <Text
            style={{
              paddingVertical: 5,
              fontWeight: 'bold',
              color:'white'
            }}>
            {name}
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white',}}>{post}</Text>
          <Text style={{color:'white'}}>Posts</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white',}}>{followers}</Text>
          <Text style={{color:'white'}}>Followers</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white',}}>{following}</Text>
          <Text style={{color:'white'}}>Following</Text>
        </View>
      </View>

      <ProfileButtons id={1} />
    
      <Text
        style={{
          paddingVertical: 10,
          fontSize: 15,
          fontWeight: 'bold',
          color:'white'
        }}>
        Suggested for you
      </Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          paddingTop: 10,
        }}>
        {name === FriendProfile.name
          ? null
          : FriendsProfileData.map((data, index) => {
              const [isFollow, setIsFollow] = useState(false);
              const [close, setClose] = useState(false);
              return (
                <View key={index}>
                  {data.name === name || close ? null : (
                    <View
                      style={{
                        width: 160,
                        height: 200,
                        margin: 3,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 0.5,
                        borderColor: '#DEDEDE',
                        borderRadius: 2,
                        position: 'relative',
                      }}>
                      <TouchableOpacity
                        onPress={() => setClose(true)}
                        style={{
                          position: 'absolute',
                          top: 10,
                          right: 10,
                        }}>
                        <AntDesign
                          name="close"
                          style={{
                            fontSize: 20,
                            color: 'white',
                            opacity: 0.8,
                          }}
                        />
                      </TouchableOpacity>
                      <Image
                        source={{uri:data.profileImage}}
                        style={{
                          width: 80,
                          height: 80,
                          borderRadius: 100,
                          margin: 10,
                        }}
                      />
                      <Text style={{fontWeight: 'bold', fontSize: 16, color:'white'}}>
                        {data.name}
                      </Text>
                      <Text style={{fontSize: 12, color:'white'}}>{data.accountName}</Text>
                      <TouchableOpacity
                        onPress={() => setIsFollow(!isFollow)}
                        style={{width: '80%', paddingVertical: 10}}>
                        <View
                          style={{
                            width: '100%',
                            height: 30,
                            borderRadius: 5,
                            backgroundColor: isFollow ? '#424242' : '#3493D9',
                            borderWidth: isFollow ? 1 : 0,
                            //borderColor: '#DEDEDE',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text style={{color: isFollow ? 'white' : 'white'}}>
                            {isFollow ? 'Following' : 'Follow'}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              );
            })}
      </ScrollView>
    </View>
  );
};

export default FriendProfile;