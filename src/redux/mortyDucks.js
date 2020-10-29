//const
const dataInitial = {
  myList: [],
};
//types
const GET_FAVORITES_SUCCESS = "GET_FAVORITES_SUCCESS";
const DELETE_FAVORITES_SUCCESS = "DELETE_FAVORITES_SUCCESS";
//Reducer
export default function reducerMorty(state = dataInitial, action) {
  switch (action.type) {
    case GET_FAVORITES_SUCCESS:
      const exist=state.myList.find(item=>item.id===action.payload.id)
      if(exist){
        return{
          ...state
        }
      }else{
        return{
          ...state,
          myList:[...state.myList,action.payload]
        }
      }
    case DELETE_FAVORITES_SUCCESS:
      console.log(action.payload.id)
      return{
        ...state,
        myList:state.myList.filter(items=>
          items.id!==action.payload.id
        )
      }
    default:
      return state;
  }
}

//Actions
export const favoriteAction = (res) => async (dispatch) => {
  dispatch({
    type: GET_FAVORITES_SUCCESS,
    payload: res,
  });
};
export const deleteFavorite = (res) => async (dispatch) => {
  dispatch({
    type: DELETE_FAVORITES_SUCCESS,
    payload: res,
  });
};
