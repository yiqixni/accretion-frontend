import Config from "../Config";

export default async function RefreshJWTaccess (refresh_token) { 
    try {
        const response = await fetch(
            Config.API_URL + "auth/jwt/refresh/", 
            {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: `{"refresh": "${refresh_token}"}`
            }
        );

        if (response.ok) {
            const data = await response.json(); 
            // save access and refresh token to local storage
            localStorage.setItem('jwt', JSON.stringify({
                "access": data.access, 
                "refresh": refresh_token
            }));
            console.log("JWT access token is refreshed"); 
            return true;
        }

        if (!response.ok) {
            const data = await response.json();
            throw new Error(JSON.stringify(data));
        }
    }
    catch (error) {
        console.log("JWT token refresh encountered an error");
        console.log(error); 

        return false; 
    }
}