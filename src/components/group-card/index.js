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
import { ButtonGroup } from 'react-native-elements';

export default class GroupCard extends Component {
  constructor(props){
    super(props);
    this.state = {
        data:props.item,
        index:0
    }
    this.tappedGridItem = this.tappedGridItem.bind(this);
  }
  componentDidMount(){
    
  }
  componentWillReceiveProps(nextProps){
      if(nextProps != this.props){
          this.setState({data:nextProps.item});
      }
  }
  updateIndex = (index) => {
    this.setState({index})
  }
  tappedGridItem(){
    if(this.props.tappedGridItem){
        this.props.tappedGridItem(this.state.data);
    }
  }
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        {/* <TouchableOpacity onPress={(e)=>this.tappedGridItem("item")} activeOpacity={0.8} style={styles.buttonStyle}> */}
            <Container style={styles.container}>
                <TouchableOpacity style={styles.rowButton} onPress={(e)=>this.tappedGridItem()} activeOpacity={0.8}>
                    <View style={styles.textGroup}>
                        <Text style={styles.groupNameText}>{this.state.data.groupName}</Text>
                        <Text style={styles.groupMembersText}>{this.state.data.groupMembersCount} members</Text>
                    </View>
                    <View style={styles.buttonGroup}>
                        <ButtonGroup
                            selectedBackgroundColor="pink"
                            onPress={this.updateIndex}
                            selectedIndex={this.state.index}
                            buttons={['Accept', 'Reject']}
                            // selectedTextStyle={{color:"white"}}
                            textStyle={{color:"white"}}
                            containerStyle={{height: 30, width:200, backgroundColor:"transparent"}} />
                    </View>
                </TouchableOpacity>  
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

