import { useState } from 'react'; 
import Button from 'react-bootstrap/Button';

import OrderBuyForm from './OrderBuyForm'; 
import OrderSellForm from './OrderSellForm';

export default function Order () {
    const [activeTab, setActiveTab] = useState('buy'); 

    return (
        <div>
            <div>
                <Button variant='outline-primary' 
                        id='dropdown-basic'
                        onClick={()=>{setActiveTab('buy')}}>
                    Buy
                </Button>
                <Button variant='outline-primary' 
                        id='dropdown-basic'
                        onClick={()=>{setActiveTab('sell')}}>
                    Sell
                </Button>
            </div>
            <div>
                {
                    activeTab=='buy' && 
                    <OrderBuyForm />
                }
                {
                    activeTab=='sell' && 
                    <OrderSellForm />
                }
            </div>
        </div>
    )
}