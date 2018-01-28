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

export default class RegisterForm extends Component {
  constructor(props){
        super(props);
        this.state = {
          user:props.user,
          name:"",
          email:"",
          referalCode:"",
          phoneNumber:""
        }
        this.registerBtnTapped = this.registerBtnTapped.bind(this);
  }
  componentDidMount(){
    
  }
  componentWillReceiveProps(nextProps){
    if(nextProps != this.props){
      // alert("nextProps.user : "+JSON.stringify(nextProps.user));
      this.setState({user:nextProps.user});
    }
  }
  registerBtnTapped(){
      if(this.props.registerBtnTapped){
        this.props.registerBtnTapped(this.state);
      }   
  }
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container style={styles.container}>
            <Form>
                <Item style = {styles.FormItemStyle} inlineLabel>
                    <Input style={styles.TextInputStyle} placeholder="Name" defaultValue={this.state.user.name} onChangeText={(text) => this.setState({name:text})}/>
                </Item>
                <Item style = {styles.FormItemStyle} inlineLabel>
                    <Input style={styles.TextInputStyle} placeholder="Phone Number" defaultValue={this.state.user.phoneNumber} onChangeText={(text) => this.setState({phoneNumber:text})}/>
                </Item>  
                <Item style = {styles.FormItemStyle} inlineLabel>
                    <Input style={styles.TextInputStyle} placeholder="Email" defaultValue={this.state.user.email} onChangeText={(text) => this.setState({email:text})}/>
                </Item>  
                <Item style = {styles.FormItemStyle} inlineLabel>
                    <Input style={styles.TextInputStyle} placeholder="Referal Code" defaultValue={this.state.user.referalCode} onChangeText={(text) => this.setState({referalCode:text})}/>
                </Item>     
            </Form>
            <View style={styles.ButtonStyle}>
                <Button onPress={this.registerBtnTapped} block>
                    <Text>Register</Text>
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
    backgroundColor: AppColors.TRANSPARENT_COLOR,
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

