import React ,{useState,useEffect} from 'react'
import {Text,View,StyleSheet,Image } from 'react-native';
import yelp from '../api/yelp';
import { FlatList } from 'react-native-gesture-handler';
import Imagedetail from '../components/Imagedetail';



const Resultsshow = ({navigation}) => {
    const [result, seTresult] = useState(null)
 const  i= navigation.getParam('id')
   
   
  
   const gr=async(id)=>{
      const res= await yelp.get('/restaurant',{
        params:{res_id:id}

      })
      seTresult(res.data)

   }
   console.log(i)

   useEffect(() => {  gr(i) }, [])

  

   if(!result)
       {return null}

  else return (
        <View style={{flex:1}}>
          
          
          <FlatList horizontal
          data={[
            {key:result.thumb },
            {key:result.featured_image},
            
          ]}
          renderItem={({item}) => <Image style={{height:200,width:400}} source={{uri:item.key}}></Image>}
        />
            <Text style={{fontSize:40,fontWeight:'bold'}}>
              {result.name}
            </Text>
            <Text style={{fontWeight:'bold',fontSize:25}}>Address:{'\n'}<Text style={{fontSize:20,fontStyle:'italic',fontWeight:'normal'}}>{result.location.address}</Text></Text>
            <Text style={{fontWeight:'bold',fontSize:25}}>Cuisines:{'\n'}<Text style={{fontSize:20,fontStyle:'italic',fontWeight:'normal'}}>{result.cuisines}</Text></Text>
            <Text style={{fontWeight:'bold',fontSize:25}}>Highlights:{'\n'}<Text style={{fontSize:20,fontStyle:'italic',fontWeight:'normal',flexDirection:'column'}}>"{result.highlights}"</Text></Text>
            <Text style={{fontWeight:'bold',fontSize:25}}>Timings:{'\n'}<Text style={{fontSize:20,fontStyle:'italic',fontWeight:'normal'}}>{result.timings}</Text></Text>
            
          
        </View>
    );
}

const styles=StyleSheet.create({

})
export default Resultsshow;