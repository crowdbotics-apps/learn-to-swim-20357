import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard11102720Reducer from '../features/Dashboard11102720/redux/reducers'
import SignUp24102717Reducer from '../features/SignUp24102717/redux/reducers'
import EmailAuth5102716Reducer from '../features/EmailAuth5102716/redux/reducers';
import SignIn46102715Reducer from '../features/SignIn46102715/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard11102720: Dashboard11102720Reducer,
SignUp24102717: SignUp24102717Reducer,
EmailAuth5102716: EmailAuth5102716Reducer,
SignIn46102715: SignIn46102715Reducer,

});