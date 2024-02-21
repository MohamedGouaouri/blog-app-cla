
import { useState, useEffect } from "react";

const useFetch = (url) => {
  console.log('Fetching data')
    var [data, setData] = useState(null);
    // var abortController = new AbortController();
    useEffect(() => {
        fetch(url, )
        .then((resp) => {
          console.log(resp)
          return resp.json();
        })
        .then((data) => {
          setData(data);
        })
        .catch(error => {
          console.log('An error has occured')
          console.error(error)
        })
        
        ;
        return () => {
          // abortController.abort();
        }
      }, [url]); // eslint-disable-line
    return [data, setData];
}

export default useFetch;