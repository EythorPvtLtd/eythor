import React from 'react';
import { useState,useEffect } from 'react';

function useFetch(url,options) {
    const [data , setData] = useState(null);
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState(null);
    
    useEffect(()=>{
        setLoading(true);

        fetch(url , options).then((response=>{
            setData(response.data);
        })).catch((err)=>{
            setError(err);
        }).finally(()=>{
            setLoading(false);
        });
    },[url]);


    return [data,loading,error];
}

export default useFetch;