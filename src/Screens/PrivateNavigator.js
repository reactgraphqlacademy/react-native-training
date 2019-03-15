import { createBottomTabNavigator } from "react-navigation";
import {
  TimelineNavigator,
  MAIN_TIMELINE_SCREEN,
  PROFILE_SCREEN
} from "./TimelineNavigator";
import { ProfileScreen } from "./ProfileScreen";
import { Colors } from "../config/utils";
import Icon from '@expo/vector-icons/FontAwesome';


export const PrivateNavigator = createBottomTabNavigator(
  {
    [MAIN_TIMELINE_SCREEN]: {
      screen: TimelineNavigator,
      navigationOptions: () => ({
        title: "Timeline",
      })
    },
    [PROFILE_SCREEN]: {
      screen: ProfileScreen,
      navigationOptions: () => ({
        title: "Users"
      })
    }
  },
  {
    initialRoute: MAIN_TIMELINE_SCREEN,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const route = navigation.state.routeName;
        const name = {
          'MAIN_TIMELINE_SCREEN': "home",
          'PROFILE_SCREEN': "user"
        }[route];
        console.log(route);
        console.log(name);
        return (
          <Icon name={name}
            size={24}
            color={tintColor}
          />
        );
      }
    }),
    // tabBarOptions: {
    //   activeTintColor: Colors.brand.primary,
    //   activeBackgroundColor: "#f00",
    //   inactiveTintColor: "gray",
    //   showLabel: false,
    //   showIcon: true,
    //   style: {
    //     backgroundColor: Colors.light
    //   }
    // }
  }
);
