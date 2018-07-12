import { StackNavigator } from 'react-navigation';

import Contacts from './screens/Contacts';
import Profile from './screens/Profile';

export default StackNavigator({
  Contacts: {
    screen: Contacts,
    navigationOptions: {
      title: 'Contacts',
      headerStyle: {
        backgroundColor: 'white'
      }
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation: { state: { params } } }) => {
      const { contact: { name } } = params;
      return {
        title: name.split(' ')[0],
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: colors.blue
        }
      }
    }
  }
},
{
  initialRouteName: 'Contacts'
}
)
