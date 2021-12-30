import { BUY_SNACK } from "./snackType";

const initialState = {
    numOfSnacks: 40
}

const snackReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_SNACK: return{
            ...state,
            numOfSnacks: state.numOfSnacks - 1
        }

        default: return state
    }
}

export default snackReducer