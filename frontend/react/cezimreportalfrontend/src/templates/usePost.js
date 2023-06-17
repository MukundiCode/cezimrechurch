import { useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";
import axios from 'axios';

async function GenerictPost(url, body) {

  return axios
            .post(url, {
                data: body
            })
            .then((response) => {
                return response.data;
            })
}

export default GenerictPost;