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
    StyleProvider,
    ImageBackground
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

import LoginForm from '../../components/login-form';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

export default class LoginScreen extends Component {
  constructor(props){
        super(props);
        this.state = {
          googleUser:{}
        }
        this.loginBtnTapped = this.loginBtnTapped.bind(this);
        this.goToSignUpPage = this.goToSignUpPage.bind(this);
        this.goToHomePage = this.goToHomePage.bind(this);

  }
  componentDidMount(){
      this.setupGoogleSignin();
      this.loginViaGoogle("");
  }
  async setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        iosClientId: "392076376981-8h9jsrv3ro5rra3nq3cakqa5fclt2j5p.apps.googleusercontent.com",
        offlineAccess: false
      });

      const user = await GoogleSignin.currentUserAsync();
      console.log(user);
      // alert("user : "+JSON.stringify(user));
      if(user != null){
        this.setState({googleUser:user});
      }
      // this.setState({user});
    }
    catch (err) {
      console.log("Google signin error", err.code, err.message);
    }
  }
  loginBtnTapped(){
    var self = this;
    // this.props.navigation.navigate(RouterContants.REGISTER_SCREEN_ROUTER_NAME)
    GoogleSignin.signIn()
      .then((user) => {
        console.log(user);
        // alert("Signed In : "+JSON.stringify(user));
        if(user != null){
          this.setState({googleUser:user});
        }

        self.loginViaGoogle(user);
      })
      .catch((err) => {
        console.log('WRONG SIGNIN', err);
      })
      .done();
  }
  loginViaGoogle(user){
      var self = this;
      var emailId = user.email;
      emailId = "suresh.apple.dev@gmail.com";//Testing
      var url = ApiConstants.GET_USER_PROFILE_API + emailId;
      ApiClient.getServerCall(url, function(error, response){   
        if(response.response.code == "401"){
          // alert(JSON.stringify(response));
          //Not Registered
          self.goToSignUpPage();
        }else if(response.response.code == "200"){
          //Registered
          self.goToHomePage();
        }
      });
     
  }
  goToSignUpPage(){
    this.props.navigation.navigate(RouterContants.REGISTER_SCREEN_ROUTER_NAME)
  }
  goToHomePage(){
    this.props.navigation.navigate(RouterContants.HOME_SCREEN_ROUTER_NAME)
  }
  // getMoviesFromApiAsync(url) {
  //   return fetch('https://devcricketdash.appspot.com/_ah/api/profileapi/v1/userProfile/getUserProfile?gmailId=suresh.apple.dev@gmail.com')
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       alert("responseJson : "+JSON.stringify(responseJson));
  //       return responseJson;
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <View style={ styles.container }>
        <Image source={AppImageContants.CRICKET_BACKGROUND} style={styles.backgroundImage} />
        <View style={styles.content}>
          
          <View style = {styles.logoContainer}>
             <Image style={styles.logoImage} source={AppImageContants.APP_LOGO} />
          </View>
          <View style = {styles.formContainer}>
                <GoogleSigninButton
          style={{width: 230, height: 48}}
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Light}
          onPress={this.loginBtnTapped.bind(this)}/>
            {/* <LoginForm loginButtonTapped={this.loginBtnTapped}/> */}
          </View>
          {/* <View style = {styles.forgotText}>
              <Text style = {styles.clickTextColor}>By clicking play you agree to <Text  style = {styles.forgotTextColor}> terms and condition</Text> </Text>
          </View> */}
        </View>
        {/* <GoogleSigninButton
    style={{width: 48, height: 48}}
    size={GoogleSigninButton.Size.Icon}
    color={GoogleSigninButton.Color.Dark}
    onPress={this.loginBtnTapped.bind(this)}/> */}
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
    justifyContent: 'center',
    alignItems:'center',
    height:200
  },
  forgotText : {
    alignItems:'center',
    marginBottom: 15,
  },
  clickTextColor:{
    color: 'white',
    fontSize: 13,
    fontFamily: 'Montserrat-Light'
  },
  forgotTextColor:{
    color: 'blue',
    fontSize: 13,
    fontFamily: 'Montserrat-Light'
  }
});

