import { useEffect,useState } from "react";
import { CartComponent } from "./CartComponent";

function Cart({addToCart}) {
    const [carts, setCarts] = useState([])
    const fetchCartData = async () => {
        await fetch("https://dummyjson.com/carts").then(response => {
            return response.json()
        }).then(data => {
            setCarts(data.carts)
        
            console.log(data)
        }
        )
            .catch(err => console.log(err));
        //    const cartData= await fetch("https://dummyjson.com/carts")
        //    cartData.json().then(data=>console.log(data))


    }

    useEffect(() => {
        fetchCartData()
    }, [])

    return (
        <div>
            <div className="flex flex-wrap">
                {carts.map(item=><CartComponent item={item} key={item.id}  addToCart={addToCart} />)} 
             </div>
        </div>
    )
}

export default Cart