import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons'
import Contacts from './screens/Contacts';
import Profile from './screens/Profile';
import Favorites from './screens/Favorites';
import User from './screens/User'
import colors from './utils/colors'

const getTabBarIcon = icon => ({
  tintColor
}) => (
  <MaterialIcons name={icon} size={26} style={{ color: tintColor }} />
)

const ContactsScreens = StackNavigator(
  {
    Contacts: {
      screen: Contacts,
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    initialRouteName: 'Contacts',
    navigationOptions: {
      tabBarIcon: getTabBarIcon('list')
    }
  }
)

const UserScreens = StackNavigator(
  {
    User: {
      screen: User
    }
  },
  {
    initialRouteName: 'User',
    navigationOptions: {
      tabBarIcon: getTabBarIcon('person')
    }
  }
)

const FavoritesScreens = StackNavigator(
  {
    Favorites: {
      screen: Favorites
    },
    Profile: {
      screen: Profile
    }
  },
  {
    initialRouteName: 'Favorites',
    navigationOptions: {
      tabBarIcon: getTabBarIcon('star')
    }
  }
)

export default TabNavigator(
  {
    Contacts: {
      screen: ContactsScreens,
    },
    Favorites: {
      screen: FavoritesScreens,
    },
    User: {
      screen: UserScreens,
    },
  },
  {
    initialRouteName: 'Contacts',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        backgroundColor: colors.greyLight
      },
      showLabel: false,
      showIcon: true,
      activeTintColor: colors.blue,
      inactiveTintColor: colors.greyDark,
      renderIndicator: () => null
    },
}
)
