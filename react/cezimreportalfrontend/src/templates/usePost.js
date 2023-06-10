import { useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";

// const GenerictPost = async (url, body, authTokens) => {
async function GenerictPost(url, body, authTokens) {
  let response = await fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + String(authTokens.access)
    },
    body: JSON.stringify(body)
  })
  return response;
}

export default GenerictPost;