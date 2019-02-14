import * as types from "./types";

const reducer = (state,{type,payload})=>{
 switch (type) {
     case types.VIEW_NAV:{
         return {
             ...state,
             bNav:payload
         }
     };
     case types.VIEW_FOOT:{
         return {
             ...state,
             bFoot:payload
         }
     };
     case types.VIEW_LOADING:{
         return {
             ...state,
             bLoading:payload
         }
     };
     case types.UPDATE_LIST:{
         return {
             ...state,
             list:payload
         }
     };
     case types.UPDATE_FINDING:{
         return {
             ...state,
             finding:payload
         }
     };
     case types.UPDATE_ITEM:{
         return {
             ...state,
             item:payload.data[payload.id-1]
         }
     };
     case types.CHECK_USER:{
         return {
             ...state,
             user:payload
         }
     };
     default:
         return state
 }
};

export default reducer;