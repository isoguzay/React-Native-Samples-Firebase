import React, { Component } from 'react';
import { TextInput, Alert, View } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from './actions';
import { Button, Card, CardSection, Spinner } from './components';

class LoginForm extends Component {
  state={ email: '', password: '', loading: false };

  clickLogin() {
      const { email, password } = this.props;
      this.props.loginUser({ email, password });
  }

  loginSuccess() {
    console.log('success');
    this.setState({ loading: false });
  }

  loginFail() {
    console.log('Error');
    this.setState({ loading: false });
    Alert.alert(
      'Message',
      'Username or password is wrong! ',
      [
        { text: 'Ok', onPress: () => null }
      ]
    );
  }

  renderButton() {
    if (!this.props.loading) {
      return <Button onPress={this.clickLogin.bind(this)}> Login </Button>;
    }
      return <Spinner size='small' />;
  }

  render() {
    console.log('response email ' + this.props.email);
    console.log('response password ' + this.props.password);

    const { inputStyle } = styles;
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Card>
          <CardSection>
            <TextInput
              placeholder="Email"
              style={inputStyle}
              value={this.props.email}
              onChangeText={email => this.props.emailChanged(email)}
            />
          </CardSection>

          <CardSection>
            <TextInput
              secureTextEntry
              placeholder="Password"
              style={inputStyle}
              value={this.props.password}
              onChangeText={password => this.props.passwordChanged(password)}
            />
          </CardSection>

          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      </View>
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

const mapStatetoProps = ({ loginControlResponse }) => {
  const { email, password, loading } = loginControlResponse;
  return {
    email: 'isoguzay@gmail.com',
    password: 'test123',
    loading
  };
};

export default connect(mapStatetoProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
