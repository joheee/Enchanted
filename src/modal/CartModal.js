import { useContext } from "react"
import { CartItem } from "../component/CartItem"
import { FeatureContext } from "../variable/Context"
import toast from 'react-hot-toast';
export function CartModal(){

    const features = useContext(FeatureContext)
    const notify = () => toast.success('Please pick up your product at the nearest clinic')

    return (
        <>
            {features.IsCartModal && (
                <div className="fixed inset-0 flex justify-end z-50 bg-black bg-opacity-40">
                    <div className="bg-white w-1/3 p-8 flex flex-col justify-between">

                        <div className="">
                            <div className="flex justify-between">
                                <h2 className="text-2xl font-bold mb-4">Cart</h2>
                                <h2 className="text-2xl mb-4 cursor-pointer" onClick={() => features.SetIsCartModal(false)}>x</h2>

                            </div>
                            <div className="mb-3 overflow-auto h-96 px-2">
                                {
                                    features.Cart.map((item,i) => (
                                        <CartItem item={item} key={i}/>
                                    ))
                                }
                            </div>

                            <hr />

                            <div className="mb-4 mt-5">
                                <div className="mb-1">Enter promo code or gift card number</div>
                                <input type="text" className="bg-gray-200 px-4 py-2 border border-gray-300 text-gray-700 w-full"/>
                            </div>

                            <div className="flex w-full justify-between mb-3">
                                <div className="">Subtotal</div>
                                <div className="">IDR {features.CartTotal}</div>
                            </div>

                            <div className="flex w-full justify-between mb-3">
                                <div className="">Shipping</div>
                                <div className="">IDR 0</div>
                            </div>

                            <hr />

                            <div className="flex w-full justify-between mt-3 mb-3">
                                <div className="font-semibold">Total Payment</div>
                                <div className="font-semibold">IDR {features.CartTotal}</div>
                            </div>
                        </div>

                        <div className="">
                            <div className="bg-gray-200 rounded-md p-2 grid justify-center mb-4">
                                <div className="text-center">Transfer IDR {features.CartTotal} to BCA Virtual Account :</div>
                                <div className="text-center font-semibold text-lg">
                                    0 1 2 3 4 5 6 7 8 1
                                </div>
                                <div className="text-center"> Expires in <span className="text-red-500">10:00</span> minutes</div>
                            </div>
                            <div className="flex gap-4 justify-end">
                            <button className="bg-white text-brown border-2 border-brown rounded px-4 py-2 hover:bg-brown hover:text-white hover:border-brown">Cancel</button>
                            <button onClick={notify} className="bg-brown text-white border-2 border-brown rounded px-4 py-2 hover:bg-white hover:text-brown hover:border-brown">Confirm</button>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    )
}