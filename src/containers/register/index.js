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
import * as AppColors from '../../themes/color-codes';
import * as AppImageContants from '../../constants/app-image-constants';
import * as RouterContants from '../../constants/router-constants';
import { NavigationActions } from 'react-navigation';

const { width, height } = Dimensions.get('window');

import RegisterForm from '../../components/register-form';

export default class RegisterScreen extends Component {
  constructor(props){
        super(props);
        this.registerButtonTapped = this.registerButtonTapped.bind(this);
  }
  componentDidMount(){
  
    
  }
  registerButtonTapped(){
    this.props.navigation.navigate(RouterContants.HOME_SCREEN_ROUTER_NAME)
  }
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container style={styles.container}>
          <View style = {styles.logoContainer}>
             <Image style={styles.logoImage} source={AppImageContants.APP_LOGO} />
          </View>
          <View style = {styles.formContainer}>
            <RegisterForm registerBtnTapped={this.registerButtonTapped}/>
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

