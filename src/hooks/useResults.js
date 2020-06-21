import React,{useState,useEffect} from 'react'
import yelp from '../api/yelp'

export default ()=>{
    const [results, setresults] = useState([])
    const [error, seterror] = useState('')

    const searchApi=async(searcterm)=>{ 
        console.log("caliing api for search opration")
      try { const response=await yelp.get('/search',{
            params:{q:searcterm,entity_type:'city',entity_id:8,order:'asc',count:50
                   }
                                                    })
        setresults(response.data.restaurants)
          } 
        catch(err){
            seterror('Something went wrong')

        }
    }
    // searchApi('pasta')
    useEffect(() => {
        searchApi('chicken')
        
    }, [])

    return [searchApi,results,error]
}
