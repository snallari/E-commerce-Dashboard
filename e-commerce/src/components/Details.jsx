import {useState,useEffect, useContext} from "react"
import { useParams } from "react-router-dom"
import { contextData } from "./DetailsProvider"


function Details(props){
    const {id}=useParams()
    const cd=useContext(contextData)
   
    console.log("data", cd.data)
    return(
        cd.data.length > 0 ? <div>
            {cd.data.map((d)=>{
                return <p key={d.id} onClick={()=>{console.log("context")}}>{d.body}</p>
            })}
        </div> : <p>No data available</p>
    )
}
export default Details
