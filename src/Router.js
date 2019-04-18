import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeUpdate from './components/EmployeeUpdate';
import ProjectCreate from './components/ProjectCreate';

const RouterComponent = () => {
  return (
      <Router sceneStyle={{ marginTop: 65 }}>

        <Scene key='identity'>

            <Scene
              key="loginScreen"
              component={LoginForm}
              title="Login"
            />

        </Scene>

        <Scene key='main'>

            <Scene
              onRight={() => Actions.employeeCreate()}
              onLeft ={() => Actions.projectCreate()}
              rightTitle="Add"
              key="employeeList"
              component={EmployeeList}
              title="List of Employee"
            />

            <Scene
              key="employeeCreate"
              component={EmployeeCreate}
              title="Add An Employee"
            />

            <Scene
              key="employeeUpdate"
              component={EmployeeUpdate}
              title="Update An Employee"
            />


        </Scene>

      </Router>
    );
  };

export default RouterComponent;
