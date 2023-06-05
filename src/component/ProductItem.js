import { ShoppingCartIcon } from "@heroicons/react/solid";
import { useContext } from "react";
import { FeatureContext } from "../variable/Context";

export function ProductItem(props){
    const features = useContext(FeatureContext)

    function handleAddToCart(){
        let arr = features.Cart
        if(arr.find(item => item.item.name === props.name) !== undefined) {
            arr.forEach(item => {
                if(item.item.name === props.name) item.quantity++
            })
        } else {
            let obj = {
                item : props,
                quantity: 1
            }
            arr.push(obj)
        }
        features.SetCart(arr)

        let totalPrice = 0;
        features.Cart.forEach(obj => {
            const itemPrice = obj.item.price;
            const itemQuantity = obj.quantity;
            const subtotal = itemPrice * itemQuantity;
            totalPrice += subtotal;
        });

        features.SetCartTotal(totalPrice)

        features.SetRefresh(!features.Refresh)
    }

    return(
        <div className="card w-96 bg-base-100 rounded-xl overflow-hidden shadow-xl">
            <figure><img src={require(`../image/${props.picture}`)} alt="Shoes" /></figure>
            <div className="card-body p-5">
                <h2 className="font-semibold text-lg">IDR {props.price}</h2>
                <p className="mb-5">{props.name}</p>

                <div className="flex items-center justify-between">

                    <div className="bg-gray-200 p-2 rounded-full flex gap-2 px-3" style={{width:'fit-content'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        <div className="">{props.rate}</div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="">
                            sold {props.sold}
                        </div>
                        <div className="bg-brown p-2 rounded-full cursor-pointer" onClick={handleAddToCart} style={{width:'fit-content'}}>
                            <ShoppingCartIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
    )
}