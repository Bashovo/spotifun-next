import AlbumReducer from "./albumReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({albumReducer:AlbumReducer});
export default rootReducer;