import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Dashboard11102720Navigator from '../features/Dashboard11102720/navigator';
import UserProfile2102719Navigator from '../features/UserProfile2102719/navigator';
import Messaging3102718Navigator from '../features/Messaging3102718/navigator';
import SignUp24102717Navigator from '../features/SignUp24102717/navigator';
import EmailAuth5102716Navigator from '../features/EmailAuth5102716/navigator';
import SignIn46102715Navigator from '../features/SignIn46102715/navigator';
import Feed7102714Navigator from '../features/Feed7102714/navigator';
import NotificationList8102713Navigator from '../features/NotificationList8102713/navigator';
import Tutorial9102712Navigator from '../features/Tutorial9102712/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Dashboard11102720: { screen: Dashboard11102720Navigator },
UserProfile2102719: { screen: UserProfile2102719Navigator },
Messaging3102718: { screen: Messaging3102718Navigator },
SignUp24102717: { screen: SignUp24102717Navigator },
EmailAuth5102716: { screen: EmailAuth5102716Navigator },
SignIn46102715: { screen: SignIn46102715Navigator },
Feed7102714: { screen: Feed7102714Navigator },
NotificationList8102713: { screen: NotificationList8102713Navigator },
Tutorial9102712: { screen: Tutorial9102712Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
