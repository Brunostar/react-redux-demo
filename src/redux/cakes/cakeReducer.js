import { buyCake } from "./cakeActions"

const initialState = {
    numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
    switch(action) {
        case buyCake: return {
            ...state,
            numOfCakes: state.numOfCakes - 1,
        }
        default: return state
    }
}

export default cakeReducer
