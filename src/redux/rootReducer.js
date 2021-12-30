import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import snackReducer from "./snacks/snackReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({    
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    snack: snackReducer,
    user: userReducer
})

export default rootReducer