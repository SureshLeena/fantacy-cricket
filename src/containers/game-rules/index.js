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

export default class GameRulesScreen extends Component {
  constructor(props){
        super(props);
        this.onBackButtonTapped = this.onBackButtonTapped.bind(this);
  }
  componentDidMount(){
  
    
  }
  onBackButtonTapped(){
    this.props.navigation.goBack()
  }
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>    
        <Header>
          <Left>
            <Button onPress={this.onBackButtonTapped} transparent>
               <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Game Rules</Title>
          </Body>
          <Right>
          </Right>
        </Header>  
        </Container>
      </StyleProvider>
    );
  }
   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  }
});

