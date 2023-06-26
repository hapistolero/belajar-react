import ActionType from "./globalactiontype"

// initial state
const globalState ={
    totalOrder:0
  }
  // reducer
  const rootReducer =(state=globalState,  action)=>{
    switch(action.type){
      case ActionType.ADD_ORDER:
        return {
          ...state,
          totalOrder:state.totalOrder +1
        }
        case ActionType.MINUS_ORDER:
          if(state.totalOrder > 0){
            return {
              ...state,
              totalOrder:state.totalOrder -1
            }
          }
          break
      default:
      return state
    }
    
    
  }

  export default rootReducer