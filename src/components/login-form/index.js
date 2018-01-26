import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  AsyncStorage,
  Keyboard,
  Image
} from 'react-native';
import { StyleProvider, Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

import getTheme from '../../../native-base-theme/components';
import platform from '../../../native-base-theme/variables/platform';
import * as AppColors from '../../themes/color-codes';
import * as AppImageContants from '../../constants/app-image-constants';
import * as RouterContants from '../../constants/router-constants';
import { NavigationActions } from 'react-navigation';

const { width, height } = Dimensions.get('window');

export default class LoginForm extends Component {
  constructor(props){
        super(props);
        this.loginBtnTapped = this.loginBtnTapped.bind(this);
  }
  componentDidMount(){
    
  }
  loginBtnTapped(){
      if(this.props.loginButtonTapped){
        this.props.loginButtonTapped();
      }   
  }
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container style={styles.container}>
            <Form>
                <Item style = {styles.FormItemStyle} fixedLabel>
                    <Label>Username</Label>
                    <Input style={styles.TextInputStyle}/>
                </Item>
                <Item style = {styles.FormItemStyle}fixedLabel>
                    <Label>Password</Label>
                    <Input style={styles.TextInputStyle}/>
                </Item>        
            </Form>
            <View style={styles.ButtonStyle}>
                <Button onPress={this.loginBtnTapped} block>
                    <Text>Login</Text>
                </Button>
            </View>   
        </Container>
      </StyleProvider>
    );
  }
   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: AppColors.APP_THEME_COLOR,
  },
  FormItemStyle:{
    marginBottom:10,
  },
  TextInputStyle:{
    color:'#FFF'
  },
  ButtonStyle:{
    padding:10,
  },
  
  
});

