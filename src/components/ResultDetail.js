import React from 'react'
import { View,Text,Image,Stylesheet, StyleSheet } from 'react-native';

const ResultDetail = ({re}) => {
    return (
        <View style={styles.view_s}>
            <Image style={styles.img_s} source={{uri:re.restaurant.thumb}}/>
            <Text style={styles.text_s}>
                 {re.restaurant.name} 
            </Text>
            <Text>
                {re.restaurant.user_rating.aggregate_rating} stars {re.restaurant.user_rating.votes} views
                {"              "}{re.restaurant.location.locality}
            </Text>
        </View>
    );
}

const styles=StyleSheet.create({
    view_s:{
        marginLeft:15
    },
 img_s:{
     height:100,width:250,
     borderRadius:10,marginBottom:5
 },
 text_s:{
     fontSize:15,fontWeight:'bold'}
})
export default ResultDetail;