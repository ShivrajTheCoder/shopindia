import { combineReducers } from "redux";
import shopreducer from "./shopping/shoppingReducer";
const rootReducer=combineReducers({
shop:shopreducer,
});

export default rootReducer;