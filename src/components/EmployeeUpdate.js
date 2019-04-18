import React, { Component } from 'react';
import { TextInput, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Spinner } from '../components';
import { empChanged, empUpdate,empDelete } from '../actions';

class EmployeeUpdate extends Component {

  state ={fname: '', surname: '', EmpNo: '', department: ''};
  componentWillMount(){
    const { fname,
      surname,
      EmpNo,
      department } = this.props.employee

      this.setState({fname,surname,EmpNo,department});
  }

  clickUpdate() {
    const { fname,
      surname,
      EmpNo,
      department } = this.state;

      this.props.empUpdate({ fname, surname, EmpNo, department, uid: this.props.employee.uid });

  }

  clickDelete(){
    this.props.empDelete({uid: this.props.employee.uid});
  }

  renderButton() {
    if (!this.props.loadingUpdate) {
      return <Button onPress={this.clickUpdate.bind(this)}> Update </Button>;
    }
      return <Spinner size='small' />;
  }

  renderDeleteButton() {
    if (!this.props.loadingDelete) {
      return <Button onPress={this.clickDelete.bind(this)}> Delete </Button>;
    }
      return <Spinner size='small' />;
  }

  render() {
    console.log('Input data : ' + this.props.employee.fname);
    const { inputStyle } = styles;
    return (
      <Card>
        <CardSection>
          <TextInput
            placeholder="Name"
            style={inputStyle}
            value={this.state.fname}
            onChangeText={fname => this.setState({ fname })}
          />
        </CardSection>

        <CardSection>
          <TextInput
            placeholder="Surname"
            style={inputStyle}
            value={this.state.surname}
            onChangeText={surname => this.setState({ surname })}
          />
        </CardSection>

        <CardSection>
          <TextInput
            placeholder="Employee Number"
            style={inputStyle}
            value={this.state.EmpNo}
            onChangeText={EmpNo => this.setState({ EmpNo })}
          />
        </CardSection>

        <CardSection>
          <Text style={{ fontSize: 10, flex: 1, marginTop: 15 }}> Choose a department</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.state.department}
            onValueChange={
              department => this.setState({ department })}
          >
            <Picker.Item label="Information Technologies" value="IT" />
            <Picker.Item label="Finance" value="FS" />
            <Picker.Item label="Logistics" value="LT" />
            <Picker.Item label="Human Resources" value="HR" />
          </Picker>
        </CardSection>

        <CardSection>
          {this.renderButton()}
        </CardSection>

        <CardSection>
          {this.renderDeleteButton()}
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
const mapToStateProps = ({ empUpdateResponse }) => {
  const { loadingUpdate, loadingDelete } = empUpdateResponse;

    return { loadingUpdate, loadingDelete };
};

export default connect(mapToStateProps, { empChanged, empUpdate,empDelete })(EmployeeUpdate);
