import React, { Component } from 'react';
import { TextInput, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Spinner } from '../components';
import { empChanged, empCreated } from '../actions';

class EmployeeCreate extends Component {

  clickSave() {
    const { fname,
      surname,
      EmpNo,
      department } = this.props;

      this.props.empCreated({ fname, surname, EmpNo, department });
      console.log('Operation Success');
  }
  renderButton() {
    if (!this.props.loading) {
      return <Button onPress={this.clickSave.bind(this)}> Save </Button>;
    }
      return <Spinner size='small' />;
  }

  render() {

    const { inputStyle } = styles;
    return (
      <Card>
        <CardSection>
          <TextInput
            placeholder="Name"
            style={inputStyle}
            value={this.props.fname}
            onChangeText={fname => this.props.empChanged({ props: 'fname', value: fname })}
          />
        </CardSection>

        <CardSection>
          <TextInput
            placeholder="Surname"
            style={inputStyle}
            value={this.props.surname}
            onChangeText={surname => this.props.empChanged({ props: 'surname', value: surname })}
          />
        </CardSection>

        <CardSection>
          <TextInput
            placeholder="Employee Number"
            style={inputStyle}
            value={this.props.EmpNo}
            onChangeText={EmpNo => this.props.empChanged({ props: 'EmpNo', value: EmpNo })}
          />
        </CardSection>

        <CardSection>
          <Text style={{ fontSize: 10, flex: 1, marginTop: 15 }}>Choose a Department : </Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.department}
            onValueChange={
              department => this.props.empChanged({ props: 'department',
                value: department })}
          >
            <Picker.Item label="Information Technologies" value="IT" />
            <Picker.Item label="Financial" value="FC" />
            <Picker.Item label="Logistics" value="LT" />
            <Picker.Item label="Human Resources" value="HR" />
          </Picker>
        </CardSection>

        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }
}

const styles = {

  inputStyle: {
    color: '#000',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 10,
    lineHeight: 23,
    flex: 2
  }
};
const mapToStateProps = ({ empListResponse }) => {
  const { fname,
    surname,
    EmpNo,
    department,
    loading } = empListResponse;

    return {
        fname,
        surname,
        EmpNo,
        department,
        loading
    };
};

export default connect(mapToStateProps, { empChanged, empCreated })(EmployeeCreate);
