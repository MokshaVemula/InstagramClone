import React, { useState } from 'react'
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native'
//import { Divider } from 'react-native-elements'
import { USERS } from './Stories'
import Icon from 'react-native-vector-icons/Ionicons'

const POSTS = [{
    key:1,
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    user: 'Moksha_Vemula',
    location:'Hyderabad',
    likes: 7870,
    caption: "Nothing can stop u from success if ur a Hardworker.",
    profile_picture: USERS[0].image,
    comments: [{
            user: "s_g_eswar",
            comment: " Nice Pic"
        },
        {
            user: "Moksha_Vemula",
            comment: "thanku so much "
        },
        {
            user: "s_g_eswar",
            comment: " keep smiling "
        }
    ]
},
{
    key:2,
    imageUrl: "https://i.pinimg.com/550x/1f/83/c5/1f83c5ce9090c12d1969ad7a3745cc82.jpg",
    user: USERS[0].user,
    location:'Some where on the world',
    likes: 7670,
    caption: "Keep Smiling, and be healthy.",
    profile_picture: USERS[0].image,
    comments: []
},
{
    key:3,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmwlpMo2uIF90YQTSfEad28sj2ku7hd9zWpA&usqp=CAU",
    user: USERS[4].user,
    likes: 7870,
    caption: "Fly like a bird never stop.",
    profile_picture: USERS[0].image,
    comments: [{
            user: "Moksha_Vemula",
            comment: " Nice Pic "
        },
        {
            user: "tulasi___________",
            comment: " Thankyou akka"
        },
        {
            user: "Moksha_Vemula",
            comment: " hehe good"
        }
    ]
},
]


const Post = ({post}) =>{
    return(
        <View style={{marginBottom:30}}>
            {/* <Divider width={1} orientation='vertical' /> */}
            <View
                style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginBottom:10
                }}
            />
            <PostHeader post={post} />
            <PostImage post={post} />
            <PostFooter post={post} />
            <PostLikes post={post} />
            <PostCaption post={post} />
            <PostCommentSection post={post} />
            <PostComment post={post} />
        </View>
    )
}

const PostHeader = ({post})=>{  
    return(
        <View style={{flexDirection:'row', justifyContent:'space-between', margin:5, alignItems:'center'}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Image source={{uri:post.imageUrl}} style={styles.story}/>
                <View >
                    <Text style={{color:'white', marginLeft:5, fontWeight:'700'}}>{post.user} </Text>
                    <Text style={{color:'white', marginLeft:5}}>{post.location} </Text>
                </View>
               
            </View>
            <TouchableOpacity>
                <Icon style={styles.icon} name='ellipsis-vertical-outline' size={20} color='#fff' />
            </TouchableOpacity>
        </View>
    )
}

const PostImage = ({post}) =>{
    return(
        <View style={{width:'99%', height:450}}>
            <Image source={{uri:post.imageUrl}} style={{height:'100%', resizeMode:'cover'}} />

        </View>
    )
}

const PostFooter = ({post}) =>{
    const [heart, setHeart] = useState(false)
    return(
        <View style={{flexDirection:'row'}}>
            <View style={{flexDirection:'row', width:'32%', justifyContent:'space-between'}}>
                <TouchableOpacity onPress={()=>setHeart(!heart)}>
                    <Icon name={heart?'heart':'heart-outline'} size={25} color={heart?'red':'#fff'}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name='chatbubble-outline' size={25} color='#fff'/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon style={styles.shareicon} name='send-outline' size={25} color='#fff'/>
                </TouchableOpacity>
            </View>
            <View style={{flex:1, alignItems:'flex-end'}}>
                <TouchableOpacity>
                    <Icon name='bookmark-outline' size={25} color='#fff' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const PostLikes = ({post}) =>{
    return(
        <View style={{flexDirection:'row', marginTop:4}}>
            <Text style={{color:'white', fontWeight:'600'}}>{post.likes} likes</Text>
        </View>
    )
}

const PostCaption = ({post})=>{
    return(
        <View style={{flexDirection:'row', marginTop:5}}>
            <Text style={{color:'white', flexWrap:'wrap', flex:1}}>
                <Text style={{fontWeight:'600'}}>{post.user}: </Text>
                <Text>{post.caption}</Text>
            </Text>
        </View>
    )
}

const PostCommentSection = ({post}) =>{
    return(
        <View style={{flexDirection:'row', marginTop:5}}>
            {!!post.comments.length && (
                <Text style={{color:'gray', flexWrap:'wrap', flex:1}}>
                    View {
                        post.comments.length > 1 ? 'all' : ''
                    } {
                        post.comments.length
                    } {
                        post.comments.length > 1 ? 'comments' : 'comment'
                    }
                </Text>)}
        </View>
    )
}

const PostComment = ({post})=>{
    return(
        <View>
            {post.comments.map((comment, index)=>(
                <View key={index} style={{flexDirection:'row', marginTop:5}}>
                    <Text style={{color:'white', flexWrap:'wrap', flex:1}}>
                        <Text style={{fontWeight:'600'}}>
                            {comment.user}
                        </Text>
                        <Text>{comment.comment}</Text>
                    </Text>
                </View>
            ))}
        </View>
    )
}

export {Post, POSTS}

const styles = StyleSheet.create({
    story:{
        width:50,
        height:50,
        marginLeft:6,
        borderWidth: 1.6,
        borderColor: '#ff8501',
        borderRadius: 30,
        marginRight:5

    },
    icon: {
        width: 20,
        height: 20,
        marginLeft: 10
    },
    shareicon: {
        transform: [{
            rotate: '320deg'
        }],
        marginTop: -3,
    }

})