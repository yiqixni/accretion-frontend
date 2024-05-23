/* 
Under-developement 
*/

import { useAuth } from './AuthContext';

export default function Logout () {
    const { logout } = useAuth(); 

    console.log("logout start "); 
    const jwt = localStorage.getItem('jwt');
    console.log(jwt);

    const jwt_empty = {
        "refresh": "",
        "access": ""
    };
    localStorage.setItem('jwt', JSON.stringify(jwt_empty));
    logout(); 

};