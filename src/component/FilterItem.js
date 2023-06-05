import { useContext } from "react"
import { FeatureContext } from "../variable/Context"

export function FilterItem(props){

    const features = useContext(FeatureContext)
    
    function handleAddFilter(){
        let arr = features.Filter
        arr.push(props.title)
        features.SetFilter(arr)
    }

    function handleRemoveFilter(){
        let arr = features.Filter.filter((element) => element !== props.title)
        features.SetFilter(arr)
    }
    
    function handleDecide(){
        features.Filter.filter((element) => element === props.title).length === 0 ? handleAddFilter() : handleRemoveFilter()
        features.SetRefresh(!features.Refresh)
    }

    return (
        <div className="form-control">
            <label  className="cursor-pointer label flex items-center gap-3 mb-5">  
                <input onClick={handleDecide} readOnly type="checkbox" checked={
                    features.Filter.filter((element) => element === props.title).length !== 0 
                } className="bg-transparent border-brown text-brown rounded-lg p-3 focus:ring-0"/>
                <span className="label-text">{props.title}</span>
            </label>
        </div>
    )
}