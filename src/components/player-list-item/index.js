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


export default class PlayerListItemCard extends Component {
  constructor(props){
    super(props);
    this.state = {
        data:props.item,
        index:0
    }
    this.tappedPlayerItem = this.tappedPlayerItem.bind(this);
  }
  componentDidMount(){
    
  }
  tappedPlayerItem(){

  }
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
            <Container style={styles.container}>
               <View style={styles.playerDetailsGroup}>
                    <Image style={styles.userImage}/>
                    <View style={styles.playerTextGroup}>
                        <Text style={styles.playerNameText}>Player Name</Text>
                        <Text style={styles.teamNameText}>Team Name</Text>
                    </View>
               </View>
               <Text style={styles.valueText}>1000000</Text>
            </Container>
      </StyleProvider>
    );
  }
   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: "transparent",
    justifyContent: 'space-between',
    alignItems:'center',
    height:50
  },
  playerDetailsGroup: {
    flex:1,
    flexDirection:'row'
  },
  userImage: {
    marginLeft:10,
    width:44,
    height:44,
    borderRadius:22,
    backgroundColor:AppColors.YELLOW_COLOR
  },
  playerTextGroup: {
    flexDirection:'column',
    marginLeft:10
  },
  playerNameText: {
    fontSize:17,
    color: '#FFF',
    fontFamily: 'Montserrat-SemiBold'
  },
  teamNameText: {
    fontSize:14,
    color: '#FFF',
    fontFamily: 'Montserrat-Light',
    // backgroundColor:"red"
  },
  valueText: {
    fontSize:16,
    color: '#FFF',
    fontFamily: 'Montserrat-Light',
  },
});

