
 import React, {Component} from 'react';
 import {Platform, StyleSheet, Text, View} from 'react-native';
 import { Provider } from 'react-redux';
 import { createStore } from 'redux';
 import reducers from '../reducers/PeopleReducer'
 import PeopleList from './PeopleList';
 import Navigation from './Navigation';


 const store = createStore(reducers);
 
 type Props = {};
 export default class App extends Component<Props> {
   render() {
     return (
      <Provider store={store}>
        <Navigation />
      </Provider>
     );
   }
 }
 
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
   welcome: {
     fontSize: 20,
     textAlign: 'center',
     margin: 10,
   },
 });