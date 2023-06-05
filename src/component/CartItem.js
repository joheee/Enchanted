export function CartItem(props){
    return (
        <div className="flex gap-3 mb-3">
            <div className="w-32">
                <img src={require(`../image/${props.item.item.picture}`)} className='' />
            </div>
            <div className="w-full">
                <div className="flex justify-between items-center">
                    <div className="font-semibold">
                        {props.item.item.name}
                    </div>
                    <div className="grid">
                        <div className="text-end">x{props.item.quantity}</div>
                        <div className="font-semibold">{props.item.item.price}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}