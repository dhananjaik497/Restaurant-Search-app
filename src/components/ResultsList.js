import React from 'react'
import { View,Text ,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import ResultDetail from './ResultDetail';
import {withNavigation} from 'react-navigation'

const ResultsList = ({r,title,navigation}) => {
    
    if(!r.length){
        return null
    }
    else {
    return (
        <View style={{marginBottom:10}}>
           <Text style={styles.title_s}>{title}</Text>
    <Text>Results:{r.length}</Text>
    <FlatList style={styles.flat} horizontal 
    showsHorizontalScrollIndicator={false}
    data={r}
    keyExtractor={(i)=>i.id}
    renderItem={({item})=>{
    return (  <TouchableOpacity onPress={()=>navigation.navigate('Result',{id:item.restaurant.id})}>
               <ResultDetail re={item}/>

    </TouchableOpacity>)
    }}/>
        </View>
    )}
}

const styles=StyleSheet.create({
    title_s:{
        fontSize:20,
        fontWeight:'bold',marginBottom:5
    },flat:{
        
    }
})

export default withNavigation(ResultsList);