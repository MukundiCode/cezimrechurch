import { useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";
import axios from 'axios';

async function GenerictPost(url, body) {

  return axios
            .post(url, {
                data: body
            })
            .then((response) => {
                if (response.status == 401){
                    window.location.replace("/logout");
                }
                return response.data;
            })
}

export default GenerictPost;