/* 
Returns Login form if the user is not logged. 
Once logged in successfully, the JWT access/refresh token will be stored in local storage.
*/

import { 
        useState, 
        // useEffect 
    } from 'react';
import { useAuth } from './AuthContext'; 
import { Helmet } from 'react-helmet';

import Config from '../Config';
import './user-auth.css';

export default function Login () {

    const { isLoggedIn, login } = useAuth(); 
    const [userData, setUserData] = useState({
        "username": "",
        "password": "",
    });
    const [loginErr, setLoginErr] = useState(false); 

    const cleanUserData = () => {
        setUserData({
            "username": "",
            "password": "",
        });
    }
    
    const changeHandler = (event) => {
        setUserData({
            ...userData, 
            [event.target.name]: event.target.value
        });
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch(
                Config.API_URL + "auth/jwt/create/", 
                {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                }
            )

            if (!response.ok) {
                const data = await response.json()
                throw new Error(JSON.stringify(data));
            }

            if (response.ok) {
                const data = await response.json(); 
                localStorage.setItem('jwt', JSON.stringify(
                    {
                        "refresh": data.refresh, 
                        "access": data.access
                    }
                ));
                cleanUserData();
                login();

                return true; 
            }
        } 
        catch (error) {
            console.log(error.message); 
            setLoginErr(true); 

            return false; 
        }
    }   

    return (
        <div>
            <Helmet>
                <title>Login | Accretion</title>
            </Helmet>
            {isLoggedIn ? 
                <h2>Welcome to Accretion, you are logged in</h2>
                :
                <form onSubmit={submitHandler}> 
                    <div>
                        <label>Username</label>  
                        <input type="text" name="username" onChange={changeHandler} value={userData.username} />  
                    </div>
                    <div>
                        <label>Password</label>  
                        <input type="password" name="password" onChange={changeHandler} value={userData.password} />  
                    </div>
                    {loginErr && 
                        <p id="error-message">
                            Loggin error: check your username or password
                        </p>
                    }
                    <button type="submit">Login</button>   
                </form>
            }
        </div>
    )
}