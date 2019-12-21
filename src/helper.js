import { useState, useEffect } from "react";
import Axios from "axios";

// Custom Hook for data fetch from backend
export default function useFetch(cultureType) {
  const [type, setType] = useState([]);

  useEffect(() => {
    //const url = "http://127.0.0.1:5000/" + cultureType;
    const url = "https://evening-stream-28525.herokuapp.com/" + cultureType;
    const fetchData = async () => {
      const response = await Axios.get(url);
      setType(response.data);
    };
    fetchData();
  }, [cultureType]);

  return type;
}
