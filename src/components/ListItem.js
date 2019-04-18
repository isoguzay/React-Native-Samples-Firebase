import React, {Component} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {CardSection} from './CardSection';

class ListItem extends Component {

  employeeClick() {
    Actions.employeeUpdate({ employee: this.props.employee });
  }

  render(){
    const {fname, surname, EmpNo, department} = this.props.employee;
    return (
      <TouchableWithoutFeedback onPress={this.employeeClick.bind(this)}>
        <View>
          <CardSection>
            <Text>
              Name : {fname} {surname} {"\n"}
              Deparment : {department} {"\n"}
              Number: {EmpNo}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default ListItem;
