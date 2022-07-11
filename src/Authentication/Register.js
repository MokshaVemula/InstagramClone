import React,{useState} from 'react';
import {Text, View, StyleSheet,Image, TextInput, Pressable, Button,TouchableOpacity, Keyboard, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons'
import auth from '@react-native-firebase/auth';


const Register = ({navigation}) =>{
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [number, setNumber] = useState('')

    const createUser=async(email, password) =>{
        if(email.length == 0) {
          Alert.alert("Enter Email");
        } else if (password.length == 0) {
          Alert.alert("Enter Password");
        }else {
          await auth().createUserWithEmailAndPassword(email, password).then(
            function(res){
                res.user.updateProfile({displayName:firstName+" "+lastName,phoneNumber:number})
                console.log(navigation.goBack());
            }
        
          ).catch(
            function (e) {
              if (e.code === "auth/invalid-email") {
                return (Alert.alert("Enter valid email"));
              } else if (e.code === "auth/weak-password") {
                return (Alert.alert("Password is short"));
              } else if (e.code === "auth/email-already-in-use") {
                return (Alert.alert("email-already-in-use"));
              } else {
                return (console.log(e.message));
              }
            }
          );
        }
    
    
      }

    
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'black'}}>
              <Image source={require('../images/logo.png')} style={{width:'70%', height:50, marginBottom:40}}/>
              <TextInput 
                placeholder='Phone number, email or username' 
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                placeholderTextColor="#fff"
            />
            <TextInput 
                placeholder='Password' 
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                placeholderTextColor="#fff"
            />
            <TouchableOpacity style={[styles.input,{alignItems:'center', justifyContent:'center', borderRadius:10,  backgroundColor:'#528AAE'}]} onPress={()=>createUser(email,password)}>
              <Text style={{color:'white', fontWeight:'bold'}}>Create Account</Text>
            </TouchableOpacity>
            <Pressable style={{alignItems:'center',paddingTop:10, justifyContent:'center', paddingBottom:10, backgroundColor:'black', paddingHorizontal:20}} onPress={()=>navigation.navigate('Login')}>
                <Text style={{color:'white', marginRight:8, fontSize:18,}}>Have an account? <Text style={{fontWeight:'bold'}}>sign In.</Text></Text>
            </Pressable>

          </View>
        // <View style = {styles.container} > 
        //     <LinearGradient colors={['blue', 'skyblue', 'white' ]} style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }}>
        //         <View style={{alignItems:'center',justifyContent:'center'}}>
        //             <Text style={styles.account}>Create Account</Text>
        //             <View style={styles.textContainer}>
        //                 <LinearGradient colors={['purple', 'pink', 'purple', ]}  start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} style={{width:'90%', borderRadius:30, marginBottom:20, }}>
        //                     <View style={styles.flexView}>
        //                         <Icon name='person' size={34} style={{paddingLeft:20, color:'black'}}/>
        //                         <TextInput 
        //                             placeholder='Enter your First Name' 
        //                             style={styles.input}
        //                             value={firstName}
        //                             onChangeText={setFirstName}
                                    
        //                         />
        //                     </View>
                            
        //                 </LinearGradient>
        //                 <LinearGradient colors={['purple', 'pink', 'purple'  ]}  start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} style={{width:'90%', borderRadius:30, marginBottom:20, }}>
        //                     <View style={styles.flexView}>
        //                         <Icon name='person' size={34} style={{paddingLeft:20, color:'black'}}/>
        //                         <TextInput 
        //                             placeholder='Enter your Last Name' 
        //                             style={styles.input}
        //                             value={lastName}
        //                             onChangeText={setLastName}
        //                         />
        //                     </View>
                            
        //                 </LinearGradient>
        //                 <LinearGradient colors={['purple', 'pink', 'purple' ]}  start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} style={{width:'90%', borderRadius:30, marginBottom:20, }}>
        //                     <View style={styles.flexView}>
        //                         <Icon name='email' size={34} style={{paddingLeft:20, color:'black'}}/>
        //                         <TextInput 
        //                             placeholder='Enter your Email' 
        //                             style={styles.input}
        //                             value={email}
        //                             onChangeText={setEmail}
        //                             textContentType="emailAddress"
        //                         />
        //                     </View>
                            
        //                 </LinearGradient>
        //                 <LinearGradient colors={['purple', 'pink', 'purple' ]}  start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} style={{width:'90%', borderRadius:30, marginBottom:20}}>
        //                     <View style={styles.flexView}>
        //                         <Icon name='lock' size={34} style={{paddingLeft:20, color:'black'}}/>
        //                         <TextInput 
        //                             placeholder='Enter your Password' 
        //                             style={styles.input}
        //                             value={password}
        //                             onChangeText={setPassword}
        //                             secureTextEntry
        //                         />
        //                     </View>
                            
        //                 </LinearGradient>
        //                 <LinearGradient colors={['purple', 'pink', 'purple' ]}  start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} style={{width:'90%', borderRadius:30, marginBottom:20}}>
        //                     <View style={styles.flexView}>
        //                         <Icon name='lock' size={34} style={{paddingLeft:20, color:'black'}}/>
        //                         <TextInput 
        //                             placeholder='Confirm your Password' 
        //                             style={styles.input}
        //                             value={confirmPassword}
        //                             onChangeText={setConfirmPassword}
        //                             secureTextEntry
        //                         />
        //                     </View>
                            
        //                 </LinearGradient>
        //                 <LinearGradient colors={['purple', 'pink', 'purple' ]}  start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} style={{width:'90%', borderRadius:30, marginBottom:20}}>
        //                         <View style={styles.flexView}>
        //                             <Icon name='phone' size={34} style={{paddingLeft:20, color:'black'}}/>
        //                             <TextInput 
        //                                 placeholder='Enter your Number' 
        //                                 style={styles.input}
        //                                 value={number}
        //                                 onChangeText={setNumber}
        //                                 //keyboardType='numeric'
        //                             />
        //                         </View>
                                
        //                 </LinearGradient>
        //             </View>
        //             <Pressable style={styles.register} onPress={() => navigation.navigate('Login')}>
        //                 <Text style={{color:'#4286f4', marginRight:8, fontSize:18, fontWeight:'800',paddingBottom:20 }} onPress={()=>navigation.navigate('Login')}> Login Here</Text>
        //                 <Icon name='east' size={24} style={{color:'#4286f4',paddingBottom:20}}/>
        //             </Pressable>
        //             <LinearGradient colors={['blue', 'skyblue', '#006Db2' ]} style={styles.registerHere} start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }}>
        //                 <Pressable style={styles.Login} onPress={()=>createUser(email,password)}>
        //                     <Text style={{color:'white', marginRight:8, fontSize:24, fontWeight:'800', }}>Register</Text>
        //                     <Icon name='east' size={24} style={{color:'white'}}/>
        //                 </Pressable>
        //             </LinearGradient>
                                   
        //         </View>
        //     </LinearGradient>
        // </View>
    )
}

export default Register

const styles = StyleSheet.create({
    input:{
        width:'90%',
        height:60,
        backgroundColor:'#424242',
        borderRadius:5,
        color:'white',
        marginBottom:20,
        padding:20
    }
    // container:{
    //     flex:1,
    //     alignItems:'center',
    //     justifyContent:'center',
        
    // },
    
   
    // textContainer:{
        
    //     borderRadius:40,
    //     //backgroundColor:'white',
    //     //height:'80%',
        
    //     width:'90%',
        
    //     paddingBottom:30,
    //     paddingHorizontal:20
       
    // },
    // linearGradient: {
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     borderRadius: 5,
    //     height: '100%',
    //     width: '100%',
    //     paddingVertical:40
    //   },
    //   input:{
    //     height: 50,
    //     width:'90%',
    //     margin: 12,
    //     padding: 10,
    //     borderRadius:20,
    //     color:'black',
    //     fontSize:18,
    
    //   },
    //   Icon:{
    //       height:40,
    //       width:40,
    //       marginLeft:10,
    //   },
    //   flexView:{
    //       flexDirection:'row',
    //       alignItems:'center',
    //       justifyContent:'space-between',
    //       borderColor:'yellow',
    //       borderWidth: 4,
    //       borderRadius:20,
    //       height:60,
    //   },
    //   register:{
    //     flexDirection:'row',
    //     alignItems:'center',
    //     justifyContent:'flex-end',
    //     marginLeft:200,
        
        
    //   },
    //   Login:{
    //     flexDirection:'row',
    //     alignItems:'center',
    //     justifyContent:'flex-end',
        
    //     paddingVertical:10,
    //     paddingHorizontal:20,
    //     borderRadius:20
    //   },
    //   account:{
    //       fontSize:40 ,
    //       fontWeight:'bold',
    //       color:'white',
    //       fontWeight:'bold',
    //       padding:30,
          
          
    //   },
    //   registerHere:{
    //       borderRadius:20,
    //       marginBottom:40
          
    //   }
    
})
