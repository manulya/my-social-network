import {combineReducers,createStore} from "redux"; 
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sitebarReducer from "./sitebar-reducer";
import usersReducer from "./users-reduser";
 
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sitebarReducer,
    usersPage:usersReducer
});

let store = createStore(reducers);

window.store=store;

export default store;