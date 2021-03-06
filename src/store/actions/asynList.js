import * as types from "../types";

const asynList = ({url,type,id})=>(dispatch,getState)=>{
    dispatch({type:types.VIEW_LOADING,payload:true});
    fetch(
        url,
    ).then(
        res=>res.json()
    ).then(
        data=>{
            dispatch({type:types.VIEW_LOADING,payload:false});
            if (id){
                dispatch({
                    type:type,
                    payload:{data,id}
                })
            } else {
                dispatch({type:type,payload:data})
            }
        }
    )
}

export default asynList;
