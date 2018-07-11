import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Contacts from './screens/Contacts'
import Contacts from './screens/Profile'

export default class App extends React.Component {
  render() {
    return <Contacts />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
