import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import {Text, View} from 'react-native'

const Message = ({route})=> {
  const {image} = route.params
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      // {
      //   _id: 1,
      //   text: 'Hello developer',
      //   createdAt: new Date(),
      //   user: {
      //     _id: 2,
      //     name: 'React Native',
      //     avatar: 'https://placeimg.com/140/140/any',
      //   },
      {
        _id: 1,
        text: 'My message',
        createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: image,
        },
        image: image,//'https://facebook.github.io/react/img/logo_og.png',
        // You can also add a video prop:
        //video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        // Mark the message as sent, using one tick
        sent: true,
        // Mark the message as received, using two tick
        received: true,
        // Mark the message as pending with a clock loader
        pending: true,
        // Any additional custom parameters are passed through
      }
      //},
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
    // <View>
    //   <Text>Hi</Text>
    // </View>
  )
}

export default Message