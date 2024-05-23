import { 
        BarChart, 
        Bar, 
        XAxis, 
        YAxis, 
        Tooltip, 
        CartesianGrid, 
        Legend, 
        ResponsiveContainer, 
    } from 'recharts';

import { usePropertyInfo } from '../property-info/PropertyInfo'; 

export default function OrderBookChart () {
    
    const { marketInfo } = usePropertyInfo(); 

    console.log(marketInfo);

    const fakeData = [
        {asking_price: 100, shares: 100},
        {asking_price: 200, shares: 5} 
    ]; 
        
    return (
        <ResponsiveContainer width="100%" height={100}>
            <BarChart 
                width={100}
                height={100}                
                // data={fakeData}
                data={[marketInfo]}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
            <XAxis dataKey="asking_price" />
            {/* <YAxis /> */}
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="shares" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    )
}