import React,{useState,useEffect} from 'react'
import { View,Text,StyleSheet,ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultList from '../components/ResultsList'

const SearchScreen = () => {
  
    const [term, setterm] = useState('')
    const [searchApi,results,error]=useResults()

    const filterbyprice=(p)=>{
        return results.filter((i)=>{
               return i.restaurant.price_range===p
        })    

    }
    
    return (
        <>
            <SearchBar t={term} tf={(nt)=>setterm(nt)} ts={(term)=>searchApi(term)}/>
    {error?<Text>{error}</Text>:null}
    
    <ScrollView>
    <ResultList  r={filterbyprice(2)} title="Cost Effective"/>
    <ResultList r={filterbyprice(3)} title="Bit Pricer"/>
    <ResultList    r={filterbyprice(4)} title="Big Spender"/>
   
    </ScrollView>
    
        </>
    );
}

const styles=StyleSheet.create({
    view_s:{
      
    }
})

export default SearchScreen;