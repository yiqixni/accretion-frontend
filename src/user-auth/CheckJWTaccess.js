import Config from "../Config";

export default async function CheckJWTaccess (access_token) { 
    try {
        const response = await fetch(
            Config.API_URL + "auth/users/", 
            {
                method: 'GET', 
                headers: {
                    'Authorization': `JWT ${access_token}`,
                    'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log("JWT access token is valid");

            return true; 
        }

        if (!response.ok) {
            const data = await response.json(); 
            throw new Error(JSON.stringify(data));
        }
    }
    catch (error) {
        console.log("JWT access token is invalid");
        console.log(error); 

        return false; 
    }
}