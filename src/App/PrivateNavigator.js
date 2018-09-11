import { createStackNavigator } from 'react-navigation'
import { TIMELINE_SCREEN, TimelineScreen } from '../Timeline'
import { UserNavigator, USERS_SCREEN } from '../User'

const PrivateNavigator = createStackNavigator({
  [TIMELINE_SCREEN]: TimelineScreen,
  [USERS_SCREEN]: UserNavigator
},
{
  initialRoute: TIMELINE_SCREEN
})

export default PrivateNavigator;
