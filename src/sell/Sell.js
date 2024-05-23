import SellerUpload from './SellerUpload'; 
import SellerView from './SellerView'; 
import {useAuth} from '../user-auth/AuthContext'; 
import { Helmet } from 'react-helmet';

export default function Sell () {
    const { isLoggedIn } = useAuth(); 

    return (
        <div>
            <Helmet>
                <title>Sell | Accretion</title>
            </Helmet>
            {isLoggedIn ? 
                <div>
                    <SellerView/>
                    <SellerUpload/>
                </div> :
                <div>
                    <h3>Please login or signup first</h3>
                </div>
            }
        </div>
    )
}