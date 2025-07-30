import { createContext, useState,useEffect} from 'react';
const contextData=createContext()
function DetailsProvider({children}){
     const [data,setdata]=useState([])
      useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=1`).then((res)=>res.json())
        .then((data)=>{setdata(data)
        })

    },[])
    return(
        <contextData.Provider value={{data,setdata}}>
            {children}
        </contextData.Provider>
    )
}
export default DetailsProvider
export{
    contextData
}
