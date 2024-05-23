import { useAuth } from './user-auth/AuthContext';
import Sell from './sell/Sell';

export default function You () {
    const { isLoggedIn, logout } = useAuth(); 

    // const jwt = JSON.parse(localStorage.getItem('jwt'));

    const emptyJWT_logout = () => {
        console.log("logout start "); 
        const jwt_empty = {
            "refresh": "",
            "access": ""
        };
        localStorage.setItem('jwt', JSON.stringify(jwt_empty));
        logout(); 
    }

    return (
        <div>
        {isLoggedIn ? 
            <div>
                <h2>Welcome to Accretion</h2>
                 <Sell/>
                <form onSubmit={emptyJWT_logout}>
                    <button type="submit">
                        Log out 
                    </button>
                </form>
            </div>
            :
            <h2>
                Please login or sign up. 
            </h2>
        }
        </div>
    );
}