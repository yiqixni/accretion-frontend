import { Helmet } from 'react-helmet';
import DatabaseDemo from '../database-demo/DatabaseDemo.js';

import "../database-demo/DatabaseDemo.css"
import "../database/Database.css"

export default function Home () {
    return (
        <div className='database-demo'>
            <Helmet>
                <title>Accretion | Reduce Frictions in Housing Market</title>
            </Helmet>            
            <DatabaseDemo/>            
        </div>
    )
}