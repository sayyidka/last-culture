import { useState, useEffect } from "react";
import Axios from "axios";

export default function useFetch(cultureType) {
  const [type, setType] = useState([]);

  useEffect(() => {
    const url = "http://127.0.0.1:5000/" + cultureType;
    const fetchData = async () => {
      const response = await Axios.get(url);
      console.log(response.data);
      setType(response.data);
    };
    fetchData();
  }, [cultureType]);

  return type;
}
