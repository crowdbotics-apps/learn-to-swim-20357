import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth5102716Reducer from '../features/EmailAuth5102716/redux/reducers';
import SignIn46102715Reducer from '../features/SignIn46102715/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth5102716: EmailAuth5102716Reducer,
SignIn46102715: SignIn46102715Reducer,

});