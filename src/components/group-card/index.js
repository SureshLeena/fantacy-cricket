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

export default class GroupCard extends Component {
  constructor(props){
        super(props);
      
  }
  componentDidMount(){
    
  }
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container style={styles.container}>
           <Text style={styles.groupNameText}>Group 1</Text>
           <Text style={styles.groupMembersText}>1000 members</Text>
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
    justifyContent: 'center',
    alignItems:'center'
  },
  groupNameText: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize:20
  },
  groupMembersText: {
    color: '#ddd',
    fontFamily: 'Montserrat-Light',
    fontSize:12
  },
});

