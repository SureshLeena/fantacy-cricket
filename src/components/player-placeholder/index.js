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


export default class PlayerPlaceholderCard extends Component {
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
                        <Text style={styles.teamNameText}>Team</Text>
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
        flexDirection:'row'
      },
      userImage: {
        width:44,
        height:44,
        borderRadius:22,
        backgroundColor:AppColors.PLACEHOLDER_COLOR
      },
      playerTextGroup: {
        flexDirection:'column',
        marginLeft:10
      },
      playerNameText: {
        fontSize:17,
        color: AppColors.PLACEHOLDER_COLOR,
        fontFamily: 'Montserrat-SemiBold',
        backgroundColor:AppColors.PLACEHOLDER_COLOR
      },
      teamNameText: {
        marginTop:10,
        fontSize:10,
        color: AppColors.PLACEHOLDER_COLOR,
        fontFamily: 'Montserrat-Light',
        backgroundColor:AppColors.PLACEHOLDER_COLOR
      },
      valueText: {
        fontSize:16,
        color: AppColors.PLACEHOLDER_COLOR,
        fontFamily: 'Montserrat-Light',
        backgroundColor:AppColors.PLACEHOLDER_COLOR
      },
});

