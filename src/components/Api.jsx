import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMount = true;
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios(url, options);
                if(isMount){
                    setData(response.data);
                    setError(null);
                    setLoading(false);
                }
            } catch (error) {
                if(isMount){
                    setError(error.message);
                }
            } finally {
                if(isMount){
                    setLoading(false);
                }
            }
        };


       
            fetchData();
        

        return () =>{
            isMount = false;
        }
    }, [url, options]);



    return { data, loading, error };
};



export default useFetch;

