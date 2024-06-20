/* 
Authenticate user by check JWT access token, refresh the access the access token if invalid
*/

import { useEffect } from 'react';
import { useAuth } from './AuthContext'; 

import CheckJWTaccess from './CheckJWTaccess'; 
import RefreshJWTaccess from './RefreshJWTaccess';

export default async function AuthJWT() {
    const { isLoggedIn, login } = useAuth(); 

    const jwt = JSON.parse(localStorage.getItem('jwt')); 

    useEffect(() => {
        if (isLoggedIn) {
            return true; 
        }
        
        if (jwt && jwt.access != "" && jwt.refresh != "") {
            console.log("JWT token is found in local storage ");
            CheckJWTaccess(jwt.access) 
            .then( response => {
                console.log("checkJWTaccess response: ", response);
                if (response == true) {
                    console.log("JWT access token is valid");
                    login(); 
                } else { 
                    console.log("JWT access token is invalid, try to refresh");
                    // try to refresh the JWT access token 
                    RefreshJWTaccess(jwt.refresh)
                    .then( response => {
                        if (response) {
                            login();
                        }
                    })
                    .catch( (error) => {
                        console.log("refresh token failed");
                        console.log(error);
                    })
                }
            })
            .catch((error) => {
                console.log("validate JWT access token failed");
                console.log(error);
            })
        }
    },[]);
}