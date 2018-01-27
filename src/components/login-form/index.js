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
        this.state = {}
        this.loginBtnTapped = this.loginBtnTapped.bind(this);
        this.onChanged = this.onChanged.bind(this);
  }
  componentDidMount(){
    
  }
  loginBtnTapped(){
      if(this.props.loginButtonTapped){
        this.props.loginButtonTapped();
      }   
  }
  onChanged(text){
    let newText = '';
    let numbers = '0123456789';

    for (var i=0; i < text.length; i++) {
        if(numbers.indexOf(text[i]) > -1 ) {
            newText = newText + text[i];
        }
        else {
            // your call back function
            // alert("please enter numbers only");
        }
    }
    this.setState({ myNumber: newText });
 }
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container style={styles.container}>
            <Form>
                <Item style = {styles.FormItemStyle} >
                    <Label>MOBILE NUMBER</Label>
                    <Input style={styles.TextInputStyle}/>
                </Item>
                <Item style = {styles.FormItemStyleSecond}>
                    <Label>OTP</Label>
                    <Input keyboardType='numeric' onChangeText={(text)=> this.onChanged(text)}
   value={this.state.myNumber}
   maxLength={10} style={styles.SecondTextInputStyle}/>
                </Item>        
            </Form>
            <View style={styles.ButtonStyle}>
                <Button onPress={this.loginBtnTapped} block>
                    <Text>Play</Text>
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
    backgroundColor: "transparent",
    marginLeft: -10
  },
  FormItemStyle:{
    marginBottom:10,
  },
  FormItemStyleSecond:{
    borderColor:AppColors.APP_THEME_COLOR,
    marginBottom:10
  },
  TextInputStyle:{
    color:'black',
    borderWidth: 0,
    borderRadius:1
  },
  SecondTextInputStyle: {
    borderColor:AppColors.APP_THEME_COLOR
  },
  ButtonStyle:{
    marginTop:5,
  },
  
});

