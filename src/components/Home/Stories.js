import React from "react"
import { Text, View, ScrollView,Image, StyleSheet,TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/Ionicons";
import Status from "./Status";
import { useNavigation } from "@react-navigation/native";

const USERS = [{
    user: 'Moksha_Moni',
    name:'mocha',
    image: 'https://i.pinimg.com/550x/1f/83/c5/1f83c5ce9090c12d1969ad7a3745cc82.jpg',
    id:1,
},
{
    user: 'itsmemeghss',
    name:'megha',
    image: 'https://image.shutterstock.com/image-photo/young-adult-profile-picture-red-260nw-1655747050.jpg',
    id:2,
},
{
    user: 'jyoo__21',
    name:'jyo',
    image: 'https://image.shutterstock.com/image-photo/smiling-teen-girl-1617-year-260nw-1700600221.jpg',
    id:3,
},
{
    user: 'pravalika_rita',
    name:'prava',
    image: 'https://images.unsplash.com/photo-1594751543129-6701ad444259?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
    id:4,
},
{
    user: 's_g_eswar',
    name:'gnan',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmwlpMo2uIF90YQTSfEad28sj2ku7hd9zWpA&usqp=CAU',
    id:5,
},
{
    user: 'meghnaa_08',
    name:'megha',
    image: 'https://www.statuspik.com/wp-content/uploads/2020/12/best-whatsapp-dp-for-girls-6.jpg',
    id:7,
},
{
    user: 'jupudisrividya',
    name:'vidya',
    image: 'https://image.shutterstock.com/image-photo/young-adult-profile-picture-red-260nw-1655747050.jpg',
    id:8,
},
{
    user: 'katam.niharika',
    name:'harika',
    image: 'https://image.shutterstock.com/image-photo/smiling-teen-girl-1617-year-260nw-1700600221.jpg',
    id:9,
},
{
    user: 'ananya_shati',
    name:'shati',
    image: 'https://images.unsplash.com/photo-1594751543129-6701ad444259?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
    id:10,
},
{
    user: 'uday_83',
    name:'uday',
    image: 'https://www.statuspik.com/wp-content/uploads/2020/12/best-whatsapp-dp-for-girls-6.jpg',
    id:11,
},

]

const Stories = () =>{
    const Navigation = useNavigation()
    let url = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'
    
    return(
        <View style={{marginBottom:13}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}} onPress={()=>Navigation.push('Status',{name:url, name:'Moksha Vemula'})}>
                    <Image source={{uri:url}} style={styles.story}/>
                    <View style={styles.badge}>
                        <Icon name="add-outline" size={20} color='white'/>
                    </View>
                    <Text style={{color:'white'}}>Your story</Text>
                </TouchableOpacity >
                {USERS.map((story, index)=>(
                    <TouchableOpacity key={index} style={{alignItems:'center', justifyContent:'center'}} onPress={()=>Navigation.push('Status',{image1:story.image, name:story.name})}>
                        <Image source={{uri:story.image}} style={styles.story}/>
                        <Text style={{color:'white',marginLeft:5}}>{story.user.length>9 ? story.user.slice(0,10).toLowerCase() + '...' : story.user.toLowerCase()}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

        </View>
    )
}

export {Stories, USERS }

const styles= StyleSheet.create({
    story:{
        width:70,
        height:70,
        marginLeft:15,
        borderWidth:3,
        borderColor:'#ff8501',
        borderRadius:70

    },
    badge:{
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        backgroundColor:'#0492c2',
        right:-0.30,
        top:40,
        //bottom:-0.0001,
        borderRadius:15,
        width:30,
        height:30,
        zIndex:100,
        borderColor:'black',
        borderWidth:4,
        borderStyle:'solid',
        
        
    },
})