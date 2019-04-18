import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import {connect} from 'react-redux';
import {employeeListData} from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount(){
    this.props.employeeListData();
      this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps){
      this.createDataSource(nextProps);
  }
  createDataSource({ employeesArray}) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r !== r2
    });
    this.dataSource = ds.cloneWithRows(employeesArray);
  }

  renderRow(employee){
    return <ListItem employee={employee} />;
  }
    render() {
    console.log(this.props.employeesArray);
    return (
      <View>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
          />

      </View>
    );
  }
}

const mapStateToProps = ({ empDataResponse }) => {
  const employeesArray = _.map(empDataResponse, (val, uid) => {
    return{ ...val, uid};
  });
  return { employeesArray };
};


export default connect(mapStateToProps, {employeeListData})(EmployeeList);
