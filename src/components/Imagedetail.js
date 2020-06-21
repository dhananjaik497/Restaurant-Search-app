import React from 'react'
import { View,Text,StyleSheet,Image } from 'react-native';

const Imagedetail = ({item}) => {
    return (
        <View>
            <Image style={{height:200,width:350,margin:5}} source={{uri:item.url}}/>
        </View>
    )
}

export default Imagedetail;