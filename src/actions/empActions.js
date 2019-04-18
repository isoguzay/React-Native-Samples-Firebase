import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import { EMP_CHANGE,
  CREATE_REQUEST,
  CREATE_REQUEST_SUCCESS,
  EMPLOYEE_LIST_DATA_SUCCESS,
  UPDATE_REQUEST,
  UPDATE_REQUEST_SUCCESS,
  DELETE_REQUEST,
  DELETE_REQUEST_SUCCESS} from './types';

export const empChanged = ({ props, value }) => {
  return (dispatch) => {
    dispatch({
      type: EMP_CHANGE,
      payload: { props, value }
    });
  };
};

export const empCreated = ({ fname, surname, EmpNo, department }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    dispatch({ type: CREATE_REQUEST });
    firebase.database().ref(`/employees/${currentUser.uid}/employees`)
    .push({ fname, surname, EmpNo, department })
    .then(() => {
      dispatch({ type: CREATE_REQUEST_SUCCESS });
      Actions.pop();
    });
  };
};

export const empUpdate = ({ fname, surname, EmpNo, department, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    dispatch({ type: UPDATE_REQUEST });
    firebase.database().ref(`/employees/${currentUser.uid}/employees/${uid}`)
    .set({ fname, surname, EmpNo, department })
    .then(() => {
      dispatch({ type: UPDATE_REQUEST_SUCCESS });
      Actions.pop();
    });
  };
};

export const empDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    dispatch({ type: DELETE_REQUEST });
    firebase.database().ref(`/employees/${currentUser.uid}/employees/${uid}`)
    .remove()
    .then(() => {
      dispatch({ type: DELETE_REQUEST_SUCCESS });
      Actions.pop();
    });
  };
};

export const employeeListData = () => {
  const {currentUser} = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/employees/${currentUser.uid}/employees`)
    .on('value', snapshot => {
        dispatch( {type: EMPLOYEE_LIST_DATA_SUCCESS, payload: snapshot.val() })
    });
  };
};
