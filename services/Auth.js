import axios from 'axios';

import { PHAT_DEV, PHAT_PROD, DEV } from '../config';

export const login = (payload) => {
    //convert input to output 
    return new Promise((resolve, reject) => {
        axios.post(`${(DEV) ? PHAT_DEV : PHAT_PROD}/login`, payload)
            .then((response) => {
                 
                if (response.status === 200) {
                    resolve(response.data);
                } else {
                    reject("Ocurrio un problema al iniciar sesión.");
                }
            }, (error) => {
                reject(error);
            });
    })
}

export const register = (payload) => {
    //convert input to output 
    return new Promise((resolve, reject) => {
        axios.post(`${(DEV) ? PHAT_DEV : PHAT_PROD}/auth/register`, payload)
            .then((response) => {
                 
                if (response.status === 200) {
                    resolve(response.data);
                } else {
                    reject("Ocurrio un problema al intentar registrar.");
                }
            }, (error) => {
                reject(error);
            });
    })
}