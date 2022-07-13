import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
//import {videoData} from './Database';
import SingleReel from './SingleReel';


const videoData = [
    {
        video:'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        postProfile:'https://i.pinimg.com/550x/1f/83/c5/1f83c5ce9090c12d1969ad7a3745cc82.jpg',
        description:'Hi my name is mocha',
        postImage:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
        likes:20,
        
    },
    {
        video:'https://static.videezy.com/system/resources/previews/000/008/139/original/Flat_Walking_Background.mp4',
        postProfile:'https://i.pinimg.com/550x/1f/83/c5/1f83c5ce9090c12d1969ad7a3745cc82.jpg',
        description:'Hi my name is mocha',
        postImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmwlpMo2uIF90YQTSfEad28sj2ku7hd9zWpA&usqp=CAU',
        likes:20,
        
    },
    {
        video:'https://static.videezy.com/system/resources/previews/000/022/005/original/cartoon-seamless-rural-landscape-footage.mp4',
        postProfile:'https://i.pinimg.com/550x/1f/83/c5/1f83c5ce9090c12d1969ad7a3745cc82.jpg',
        description:'Hi my name is mocha',
        postImage:'https://image.shutterstock.com/image-photo/young-adult-profile-picture-red-260nw-1655747050.jpg',
        likes:20,
        
    },
    {
        video:'https://static.videezy.com/system/resources/previews/000/008/139/original/Flat_Walking_Background.mp4',
        postProfile:'https://i.pinimg.com/550x/1f/83/c5/1f83c5ce9090c12d1969ad7a3745cc82.jpg',
        description:'Hi my name is mocha',
        postImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmwlpMo2uIF90YQTSfEad28sj2ku7hd9zWpA&usqp=CAU',
        likes:20,
        
    },
    
]


const ReelsComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndexValue = ({index}) => {
    setCurrentIndex(index);
  };

  return (
    <SwiperFlatList
      vertical={true}
      onChangeIndex={handleChangeIndexValue}
      data={videoData}
      renderItem={({item, index}) => (
        <SingleReel item={item} index={index} currentIndex={currentIndex} />
      )}
      keyExtractor={(item, index) => index}
    />
  );
};

export default ReelsComponent;