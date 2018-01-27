
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

const { width, height } = Dimensions.get('window');
import * as AppImageContants from '../../constants/app-image-constants';

// var RepeatImage = React.createClass({
//     render: function(){
        // var images = [],  
        // imgWidth = 7,
        // winWidth =Dimensions.get('window').width;

        // for(var i=0;i<Math.ceil(winWidth / imgWidth);i++){
        //     images.push((
        //          <Image source={AppImageContants.BLUE_PATTERN_BACKGROUND} style={} />
        //     ))
        // }

//         return (
            // <View style={{flex:1,flexDirection:'row'}}>
            // {
            //     images.map(function(img,i){
            //     return img;
            //     })
            // }
            // </View>
//         )
//   }
// });

export default class RepeatImage extends Component {
    constructor(props){
      super(props);
    }
    componentDidMount(){
      
    }
    render() {
        var images = [];  
        var imgWidth = 7;
        // winWidth =Dimensions.get('window').width;

        for(var i=0;i<Math.ceil(width / width);i++){
            images.push(
                 <Image source={AppImageContants.BLUE_PATTERN_BACKGROUND} />
            )
        }
      return (
           <View style={{flex:1,flexDirection:'row'}}>
            {
                images.map(function(img,i){
                     return img;
                })
            }
            </View>
      );
    }
     
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: "transparent",
      justifyContent: 'center',
      alignItems:'center',
  
    },
    rowButton:{
      backgroundColor: "transparent",
      justifyContent: 'center',
      alignItems:'center',
      position:'absolute',
      top:0,
      width:width,
      bottom:0
    },
    textGroup: {
      // flex: 1,
      flexDirection:'column',
      backgroundColor: "transparent",
      justifyContent: 'center',
      alignItems:'center',
      padding:20
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
    buttonGroup: {
      // flex: 1,
      flexDirection:'row',
      backgroundColor: "transparent",
      justifyContent: 'center',
      alignItems:'center',
      padding:20
    },
  });
  
  