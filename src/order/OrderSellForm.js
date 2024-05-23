import { useState } from 'react'; 
import Button from 'react-bootstrap/Button';

export default function OrderSellForm () {
    const [data, setData] = useState({
        "limit_price": "", 
        "shares": ""
    })

    const submitHandler = async (event) => {
        event.preventDefault(); 

        try{
            const response = await fetch( //in development progress 
                "", 
                {
                    method: "POST"
                }
            )

            if (response.ok) {
                console.log("submit accepted");
            }
            if(!response.ok){
                throw new Error("submit failed");
            }
        } 
        catch(error){
            console.log(error);
        }
    }

    const changeHandler = (event) =>{
        setData({
            ...data, 
            [event.target.name]: event.target.value
        })

    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Limit Price</label>
                    <input 
                        type="text" 
                        name="limit_price" 
                        value={data.limit_price}
                        onChange={changeHandler} 
                    />
                </div>
                <div>
                    <label>Shares</label>
                    <input 
                        type="text" 
                        name="shares" 
                        value={data.shares}
                        onChange={changeHandler} 
                    />
                </div>
                <div>
                    <label>Estimated Credit:</label>
                </div>
                <Button type="submit"
                        // variant='outline-primary' 
                        id='dropdown-basic'
                >
                    Review Order
                </Button>
            </form>
        </div>
    )
}