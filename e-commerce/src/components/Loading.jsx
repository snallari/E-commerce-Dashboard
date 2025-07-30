import { Skeleton } from "@mui/material"
function Loading(){

    return(
        <>
       <Skeleton variant="text" sx={{ fontSize: '1rem' }}  width={100} />
       <Skeleton variant="text" sx={{ fontSize: '1rem' }}  width={100} />
       </>
    )
}

export default Loading;
