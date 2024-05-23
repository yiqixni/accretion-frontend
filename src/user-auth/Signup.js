import { useState } from 'react';
import { Helmet } from 'react-helmet';

import Config from '../Config';
import './user-auth.css';

export default function Signup () {
    const [userData, setUserData] = useState({
        "username": "",
        "first_name": "",
        "last_name": "",
        "email": "",
        "password": "",
        "re_password": ""
    });

    const cleanUserData = () => {
        setUserData({
            "username": "",
            "first_name": "",
            "last_name": "",
            "email": "",
            "password": "",
            "re_password": ""
        });
    }

    const [signupError, setSignupError] = useState({});
    
    const changeHandler = (event) => {
        setUserData({
            ...userData, 
            [event.target.name]: event.target.value
        });
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        
        fetch(
            Config.API_URL + "auth/users/", 
            {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
        .then(response => {
            if (!response.ok) {
                return response.json()
                .then(data => {throw new Error(JSON.stringify(data))})
            } else {
                alert("Signup successful! Please sign in.");
                cleanUserData();
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            setSignupError(JSON.parse(error.message));
            if (signupError.username) {
                alert("username: " + signupError.username);
            }
            console.log(signupError);
        })
    }
    
    return (
        <div>
            <Helmet>
                <title>Signup | Accretion</title>
            </Helmet>
            <form onSubmit={submitHandler}> 
                <div>
                    {('non_field_errors' in signupError) && <p id="error-message">{signupError.non_field_errors}</p>}
                    <label>Username</label>  
                    <input type="text" name="username" onChange={changeHandler} value={userData.username} />  
                    {('username' in signupError) && <p id="error-message">{signupError.username}</p>}
                </div>
                <div>
                    <label>First Name</label>  
                    <input type="text" name="first_name" onChange={changeHandler} value={userData.first_name} />  
                </div>
                <div>
                    <label>Last Name</label>  
                    <input type="text" name="last_name" onChange={changeHandler} value={userData.last_name} />  
                </div>
                <div>
                    <label>Email</label>  
                    <input type="email" name="email" onChange={changeHandler} value={userData.email} />  
                </div>
                <div>
                    <label>Password</label>  
                    <input type="password" name="password" onChange={changeHandler} value={userData.password} />  
                    {('password' in signupError) && <p id="error-message">{signupError.password}</p>}
                </div>
                <div>
                    <label>Confirm Password</label>  
                    <input type="password" name="re_password" onChange={changeHandler} value={userData.re_password} />  
                    {('re_password' in signupError) && <p id="error-message">{signupError.re_password}</p>}
                </div>
                <button type="submit">Sign up</button>   
            </form>
        </div>
    )
}