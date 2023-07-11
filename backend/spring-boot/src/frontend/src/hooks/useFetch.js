import { useState, useEffect, useContext } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    
    setTimeout(() => {
      fetch(url,
        {
          signal: abortCont.signal,
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(res => {
          if (!res.ok) { // error coming back from server
            console.log(res.status)
            if (res.status == 401){
              window.location.replace("/logout");
            }
            throw Error('could not fetch the data for that resource');
          }
          return res.json();
        })
        .then(data => {
          console.log("Status is " + data.status)
          setIsPending(false);
          setData(data);
          setError(null);
        })
        .catch(err => {
          if (err.name === 'AbortError') {
            console.log('fetch aborted')
          } else {
            // auto catches network / connection error
            setIsPending(false);
            setError(err.message);
          }
        })
    }, 1000);

    // abort the fetch
    return () => abortCont.abort();
  }, [url])

  return { data, isPending, error };
}

export default useFetch;