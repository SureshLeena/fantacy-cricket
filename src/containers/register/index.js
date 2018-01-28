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
import { 
    Container, 
    Header, 
    Title, 
    Content, 
    Button, 
    Icon, 
    Text, 
    Left, 
    Right, 
    Body,
    StyleProvider
} from 'native-base';
import getTheme from '../../../native-base-theme/components';
import platform from '../../../native-base-theme/variables/platform';
import * as ApiConstants from '../../constants/api-constants';
import * as ApiClient from '../../helpers/api-client';
import * as AppColors from '../../themes/color-codes';
import * as AppImageContants from '../../constants/app-image-constants';
import * as RouterContants from '../../constants/router-constants';
import { NavigationActions } from 'react-navigation';

const { width, height } = Dimensions.get('window');

import RegisterForm from '../../components/register-form';

export default class RegisterScreen extends Component {
  constructor(props){
        super(props);
        this.state = {
          user:{}
        }
        this.registerButtonTapped = this.registerButtonTapped.bind(this);
        this.goToHomePage = this.goToHomePage.bind(this);
  }
  componentDidMount(){
      this.preloadContents(this.props);
  }
  // componentWillReceiveProps(nextProps){
  //   if(nextProps != this.props){
  //     this.preloadContents(nextProps);
  //   }
  // }
  preloadContents(props){
    if(props.navigation.state.params.type != undefined && props.navigation.state.params.user != undefined){
      // alert(JSON.stringify(props.navigation.state.params))
      this.setState({user:props.navigation.state.params.user});
    }
  }
  registerButtonTapped(user){
    var data = {
      gmailId: user.email,
      firstName: user.name,
      phoneNumber: user.phoneNumber,
      referralCode: user.referralCode
    }
    var url = ApiConstants.HTTP_BASE_URL + ApiConstants.SIGNUP_API;
    ApiClient.postServerCall(url, data, function(error, response){   
      alert("response : "+JSON.stringify(response));
      if(response.response.code == "200"){
        //Registered
        self.goToHomePage();
      }
    });
    // this.props.navigation.navigate(RouterContants.HOME_SCREEN_ROUTER_NAME)
  }
  goToHomePage(){
    this.props.navigation.navigate(RouterContants.HOME_SCREEN_ROUTER_NAME)
  }
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <View style={ styles.container }>
          <Image source={AppImageContants.CRICKET_BACKGROUND} style={styles.backgroundImage} />
          <Container style={styles.content}>
            <View style = {styles.logoContainer}>
              <Image style={styles.logoImage} source={AppImageContants.APP_LOGO} />
            </View>
            <View style = {styles.formContainer}>
              <RegisterForm user={this.state.user} registerBtnTapped={this.registerButtonTapped}/>
            </View>
          </Container>
        </View>
      </StyleProvider>
    );
  }
   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    top:0,
    bottom:0,
    width:width,
    height:height,
    flexDirection:'column',
    backgroundColor: "transparent",
    position:"absolute"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    justifyContent: 'center',
    width:width
  },
  logoContainer:{
    alignItems:'center',
    justifyContent:'center',
    flexGrow:1
  },
  logoImage:{
    resizeMode: 'contain',
    width:200,
    height:120
  },
  formContainer:{
    height:400,
    padding:20,
  }
});

