
import React,{ createContext,useReducer} from "react";

export const layoutContext =createContext()
export const layoutDispatchContext =createContext()

const layoutReducer=(state,action)=>{
    switch (action.type) {
      case "TOGGLE_DRAWER":
        return !state
      default:
        return state;
    }
  }

  const LayoutProvider = ({children})=>{
    const [drawerOpen,dispatch]=useReducer(layoutReducer,false)

    return(
        <layoutContext.Provider value={drawerOpen}>
            <layoutDispatchContext.Provider value={dispatch}>
                {children}
            </layoutDispatchContext.Provider>
        </layoutContext.Provider>
    )
  }
  export default LayoutProvider

// ############################ ACTION ######################################


export const toggleDrawer=(dispatch)=>{
    dispatch({
        type:"TOGGLE_DRAWER",
    })
}

