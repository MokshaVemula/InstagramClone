import React from "react";
import {Text, View, ActivityIndicator} from 'react-native'
import { Provider, useDispatch, useSelector } from "react-redux";
import {Router} from "./src/navigation/Router";
import { Authentication } from "./src/navigation/Router";
import { store } from "./src/redux/store";
import { getToken } from "./src/redux/actions";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./src/redux/store";

const InstaClone=()=>{
  const storeData = useSelector((state)=>state)
  
  const uid = storeData.userReducer.uid
  const dispatch = useDispatch();

  if (uid){
    return(
      <Router/>
    )  
  }
  return(
    <Authentication/>
  )
  
  
}



const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator size="large" color="#00ff00" style={{flex:1, justifyContent:"center", alignItems:"center"}}/>} persistor={persistor}>
        <InstaClone />
      </PersistGate>
      
    </Provider>
  )
}

export default App;













//"react-native-elements": "^3.4.2",