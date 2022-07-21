import React,{useState} from "react";
import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image,Modal, Pressable,Alert } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Stories from "./Stories";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Header = () =>{
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false);

    function uploadImage() {
        let options = {
          mediaType: 'photo',
          quality: 1,
          includeBase64: true,
          storageOptions: {
            skipBackup: true
          }
        };
    
        launchImageLibrary(options, response => {
    
          if (response.didCancel) {
            Alert.alert('Cancelled image selection');
          } else if (response.errorCode == 'permission') {
            Alert.alert('permissions not satisfied');
          } else if (response.errorCode == 'other') {
            Alert.alert(image.errorMessage);
          } else if (response.assets[0].fileSize > 2097152) {
            alert.alert('Maximum size exceeded', 'Please choose image under 3 MB', [{ text: 'ok' }]);
    
          } else {
            const setData=async()=>{
              try {
                await AsyncStorage.setItem('uri',response.assets[0].uri )
              } catch (e) {
                console.log('rejected:'+e)
              }
            }
            setData()
          }
        });
    }

    const Opencamera = ()=>{
        let options = {
          mediaType : 'photo',
          quality:1,
          includeBase64:true,
          storageOptions: {
            skipBackup: true
          }
        };
        launchCamera(options, response=>{
          if(response.didCancel){
            Alert.alert('Cancelled image selection')
          }else if(response.errorCode=='permission'){
            Alert.alert('permissions not satisfied')
          }else if(response.errorCode=='other'){
            Alert.alert(response.errorMessage)
          }else if(response.assets[0].fileSize > 2097152){
            Alert.alert('Maximum size exceeded', 'Please choose image under 3 MB',[{text:'ok'}],);
    
          }else{
            
            const setData=async()=>{
              try {
                await AsyncStorage.setItem('uri',response.assets[0].uri)
              } catch (e) {
                console.log('rejected:'+e)
              }
            }
            console.log(response.assets[0].uri)
            setData()
        }
      })
      
      }
   

  return(
      <View>
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={require('../../images/logo.png')} style={styles.logo}/>
            </TouchableOpacity>
            <View style={styles.IconContainer}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Icon style = {styles.icon} name = "add-circle-outline" size = {30} color = "#fff" />
            </TouchableOpacity> 
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Pressable>
                            <Text style={styles.modalText}>Upload Image</Text>
                        </Pressable>
                        <Pressable onPress={()=>uploadImage("image")}>
                            <Text style={styles.modalText}>Launch Image Library</Text>
                        </Pressable>
                        <Pressable onPress={()=>launchCamera("image")}>
                            <Text style={styles.modalText} >Launch Camera</Text>
                        </Pressable>
                        
                        <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                        >
                        <Text style={styles.textStyle}>Go Back</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity onPress={()=>{navigation.navigate('MessageList')}}>
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>11</Text>
                </View>
                <Icon style = {styles.icon} name = "chatbubble-ellipses-outline" size = {30} color = "#fff" />
            </TouchableOpacity>     
            </View>
            
        </View>
        
    </View>
    
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        marginHorizontal:10
    },
    logo:{
        width:150,
        height:80,
        resizeMode:'contain',
        
    },
    IconContainer:{
        flexDirection:'row',
        color:'white'
    },
    icon:{
        width:40,
        height:40,
        marginLeft:10
    },
    badge:{
        position:'absolute',
        backgroundColor:'green',
        right:-0.5,
        top:-5,
        borderRadius:25,
        width:26,
        height:19,
        alignItems:'center',
        justifyContent:'center',
        zIndex:100
    },
    badgeText:{
        color:'white',
        fontWeight:'600'
    },
    centeredView: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        marginTop:200
      },
      modalView: {
        flex:0.5,
        height:'100%',
        width:'80%',
        margin: 20,
        backgroundColor: 'transparent',
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderColor:'white',
        borderWidth:2
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontSize:25,
        fontWeight: "bold",
        textAlign: "center",
        paddingHorizontal:30,
        paddingVertical:8
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        color:'white',
        fontWeight:'bold',
        fontStyle:'italic',
        fontSize:22

      },
})