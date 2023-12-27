import { useState,useEffect,useCallback } from "react";
import axios from 'axios';
// import {RAPID_API_KEY} from '@env'
// const rapidApiKey= RAPID_API_KEY
const useFetch=(endpoint,query)=>{
    const [data, setData] = useState([]);

    const [error, setError] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '93915e3c5fmsh7329a9866d234f3p14b28ejsn8f6d430307d5',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
          },
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {...query},
      
      };
      const fetchData = async () => {
        setIsLoading(true);
    
        try {
          const response = await axios.request(options);
    console.log(response,'ressss')
          setData(response.data.data);
          setIsLoading(false);
        } catch (error) {
          setError(error);
          console.log(error)
        } finally {
          setIsLoading(false);
        }
      };

    useEffect(()=>{
        fetchData();

    },[]);
    const refetch=()=>{
        setIsLoading(true);
        fetchData()
    }
    return {data,isLoading,error,refetch}
}
export default useFetch;