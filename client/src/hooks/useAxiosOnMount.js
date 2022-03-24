// TODO convert to hook
// onMount do a get request to get data
// setup loading: boolean, error state, data(from server)

import axios from "axios";
import { useEffect, useState } from "react";

const useAxiosOnMount = (url) => {
  //   setting up init state
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async()=>{
      setLoading(true)
      try {
          let res = await axios.get(url)
          setData(res.data)
          setLoading(false)
      } catch (error) {
          setError(error)
          setLoading(false)
      }
  }

  return {data, loading, error, setData}
};

export default useAxiosOnMount