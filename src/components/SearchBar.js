import React from 'react'
import { View,Text,StyleSheet } from 'react-native';
import {Feather} from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler';
const SearchBar = ({t,tf,ts}) => {
    return (
        <View style={styles.background}>
            <Feather name='search' style={styles.icons}/>
            <TextInput style={styles.inputstyle} value={t}
             onChangeText={(qw)=>tf(qw)} placeholder="Search"
             autoCapitalize='none'
             autoCorrect={false} placeholderTextColor = "#A9A9A9"
             onEndEditing={()=>ts(t)}></TextInput>
        </View>
    );
}
const styles=StyleSheet.create({
    background:{
        backgroundColor:'#DCDCDC',
        height:40,borderRadius:4,marginBottom:10,
        marginHorizontal:15,flexDirection:'row'
    },
    inputstyle:{
        flex:1,fontSize:18
    },
    icons:{
        fontSize:35,alignSelf:'center',marginHorizontal:10
    }
})

export default SearchBar;