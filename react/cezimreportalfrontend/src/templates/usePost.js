import { useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";

const GenerictPost =(url, body, authTokens) => {

  fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + String(authTokens.access)
      },
      body: JSON.stringify(body)
    }).then(() => {
      
    })

  // const [data, setData] = useState(null);
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null);
  // const { authTokens, logoutUser } = useContext(AuthContext);

  // useEffect(() => {
  //   const abortCont = new AbortController();

  //   setTimeout(() => {
  //     fetch(url,
  //       {
  //         signal: abortCont.signal,
  //         headers: {
  //           method: 'POST',
  //           "Content-Type": "application/json",
  //           "Authorization": "Bearer " + String(authTokens.access)
  //         },
  //         body: JSON.stringify(body)
  //       })
  //       .then(res => {
  //         if (!res.ok) { // error coming back from server
  //           throw Error('could not post the data ');
  //         }
  //         return res.json();
  //       })
  //       .then(data => {
  //         setIsPending(false);
  //         setData(data);
  //         setError(null);
  //       })
  //       .catch(err => {
  //         if (err.name === 'AbortError') {
  //           console.log('fetch aborted')
  //         } else {
  //           setIsPending(false);
  //           setError(err.message);
  //         }
  //       })
  //   }, 1000);

  //   return () => abortCont.abort();
  // }, [url])

  // return { data, isPending, error };
}

export default GenerictPost;