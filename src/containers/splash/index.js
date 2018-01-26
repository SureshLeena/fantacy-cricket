import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  AsyncStorage,
  Keyboard,
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

export default class SplashScreen extends Component {
  constructor(props){
        super(props);
  }
  componentDidMount(){
        var self = this;
        setTimeout(function(){
            self.loadLoginScreen();
        },2000);
  }
  loadLoginScreen(){
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: RouterContants.LOGIN_SCREEN_ROUTER_NAME})
            ]
        })
        this.props.navigation.dispatch(resetAction) ;
  }
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container style={styles.container}>
          <Image style={styles.logoImage} source={AppImageContants.APP_LOGO} />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage:{
    resizeMode: 'contain',
    width:200,
    height:120
  }
});

