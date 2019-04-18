import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';


class Main extends Component {
  componentWillMount() {
    /* create a firebase project with your account then initialize your api there. */
      var config = {
        apiKey: "AIzaSyDi7KdDe0rmbBhzvDFkgZOMzSUKKvQsXGw",
        authDomain: "reactnativesamplefirebase.firebaseapp.com",
        databaseURL: "https://reactnativesamplefirebase.firebaseio.com",
        projectId: "reactnativesamplefirebase",
        storageBucket: "reactnativesamplefirebase.appspot.com",
        messagingSenderId: "270549432054"
      };

      firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
  }
}
export default Main;
