import React, { useEffect } from 'react';
import database from '@react-native-firebase/database';

const Message=({ userId }) =>{
  useEffect(() => {
    const onValueChange = database()
      .ref(`/users/${userId}`)
      .on('value', snapshot => {
        console.log('User data: ', snapshot.val());
        });

    // Stop listening for updates when no longer required
    return () => database().ref(`/users/${userId}`).off('value', onValueChange);
  }, [userId]);
}

export default Message