
import React,{ createContext,useReducer} from "react";

export const twitteContext =createContext()
export const twitteDispatchContext =createContext()

const twitteReducer=(state,action)=>{
    switch (action.type) {
      case "CHANGE_AVATAR":
        return {...state,userImg:action.payload}
      case "SET_TWITTE_TEXT":
        return {...state,twitte:action.payload}
      case "SET_TWITTE_LIST":
        return {...state,twitteList:action.payload}
      case "LIKE_TWITTE":
        const temp =[...state.twitteList]  
        const id =action.payload
        const index=temp.findIndex(p=> p._id===id)
        temp[index].likes +=1
        return {...state,twitteList:temp}
      default:
        return state;
    }
  }

  const TwitteProvider = ({children})=>{
    const [state,dispatch]=useReducer(twitteReducer,{twitte:'',twitteList:[],
    userImg:localStorage.getItem('image')})

    return(
        <twitteContext.Provider value={state}>
            <twitteDispatchContext.Provider value={dispatch}>
                {children}
            </twitteDispatchContext.Provider>
        </twitteContext.Provider>
    )
  }
  export default TwitteProvider

// ############################ ACTION ######################################

export const setTwitte=(dispatch,twitteText)=>{
    dispatch({
        type:"SET_TWITTE_TEXT",
        payload:twitteText
    })
}
export const setTwitteList=(dispatch,twitteList)=>{
    dispatch({
        type:"SET_TWITTE_LIST",
        payload:twitteList
    })
}
export const likeTwitte=(dispatch,id)=>{
    dispatch({
        type:"LIKE_TWITTE",
        payload:id
    })
}
export const changeUserImg=(dispatch,newImg)=>{
    dispatch({
        type:"CHANGE_AVATAR",
        payload:newImg
    })
}