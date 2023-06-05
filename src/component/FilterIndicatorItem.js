import { useContext } from "react"
import { FeatureContext } from "../variable/Context"

export function FilterIndicatorItem(props){

    const features = useContext(FeatureContext)

    function handleRemoveFilter(){
        let arr = features.Filter.filter((element) => element !== props.title)
        features.SetFilter(arr)
        features.SetRefresh(!features.Refresh)
    }

    return (
        <div className="bg-white rounded-full shadow-lg flex gap-3 items-center overflow-hidden">
            <div className="px-4">{props.title}</div>
            <div onClick={handleRemoveFilter} className="text-brown p-1 hover:bg-gray-200 font-semibold cursor-pointer px-4">x</div>
        </div>
    )
}