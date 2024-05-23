import {useParams} from 'react-router-dom'; 
import {
        useState, 
        useEffect,
        useContext, 
        createContext
    } from 'react';

import Order from '../order/Order'; 
import OrderBookChart from '../order-book/OrderBookChart';

import Config from '../Config';
import './PropertyInfo.css'; 

const PropertyInfoContext = createContext(undefined); 

export default function PropertyInfo () {
    const { id } = useParams(); 

    const [images, setImages] = useState([]); 
    const [detail, setDetail] = useState({
        address: "", 
        description: ""
    }); 
    const [marketInfo, setMarketInfo] = useState(); 

    // fetch PropertyInfo with id from API 
    useEffect(() => {
        const getProperty = async () => {
            try {
                const response = await fetch(
                    Config.API_URL + `api/buy/?id=${id}`, 
                    {
                        method: "GET", 
                        headers: {
                            // "Authorization": `JWT ${jwt.access}` 
                        }
                    }
                )
                const data = await response.json(); 
                setImages(data[0].images.map((images)=> images.image));
                setDetail({
                    address: data[0].address, 
                    description: data[0].description
                })
                setMarketInfo({
                    asking_price: data[0].asking_price, 
                    shares: data[0].shares 
                })
            } 
            catch (error) {
                console.log(error)
            }
        }

        getProperty(); 
    }, [])

    const PropertyInfoProvider = ({ children }) => {
        
        return (
            <PropertyInfoContext.Provider value={{ images, detail, marketInfo }}>
                { children }
            </PropertyInfoContext.Provider>
        )
    }

    return (
        <PropertyInfoProvider>
            <div>
                <div className='three-column-container'>
                    <div className='images'>
                        <img 
                            className='image-lead' 
                            src={images[0]}
                        />
                    </div>
                    <div className='buy-sell-tab'>
                        <Order />
                    </div>
                </div>
                <div className='three-column-container'> 
                    <div className='property-details'>
                        <h6>Location</h6>
                        <p>
                            {detail.address} 
                        </p>
                        <h6>What's special</h6>
                        <p>
                            {detail.description} 
                        </p>
                    </div>
                    <div className='bid-ask-chart'>
                        <h5>Bid/ask chart</h5>
                        <OrderBookChart />
                    </div>
                </div>
            </div>
        </PropertyInfoProvider>
    )
    
}

export const usePropertyInfo = () => {
    const context = useContext(PropertyInfoContext); 

    if (!context) {
        throw new Error("usePropertyInfo must be wrap inside of PropertyInfoProvider"); 
    }

    return context; 
}