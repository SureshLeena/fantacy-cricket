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

import GridView from 'react-native-flex-grid-view'
import GroupCard from '../../components/group-card';

export default class GroupsScreen extends Component {
  constructor(props){
        super(props);
        this.state = {
            groups:[]
        }
        this.onBackButtonTapped = this.onBackButtonTapped.bind(this);
        this.getAllGroups = this.getAllGroups.bind(this);
        this.tappedGridItem = this.tappedGridItem.bind(this);
  }
  componentDidMount(){
    this.getAllGroups();
  }
  getAllGroups(){
    var mygroups = [];
    for(var i=0; i<10; i++){
        var group = {
          groupName:"Group "+(i+1),
          groupId:i,
          groupMembersCount:100
        }
        mygroups.push(group);
    }
    this.setState({
      groups:mygroups
    });
  }
  onBackButtonTapped(){
    this.props.navigation.goBack()
  }
  tappedGridItem(item){
    this.props.navigation.navigate(RouterContants.GROUP_MEMBERS_LIST_SCREEN_ROUTER_NAME)
  }
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
      <View style={styles.container}>
        <Image source={AppImageContants.BLUE_PATTERN_BACKGROUND} style={styles.backgroundImage} />
  
        <Container style={styles.content}>    
          <Header>
            <Left>
              <Button onPress={this.onBackButtonTapped} transparent>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Groups</Title>
            </Body>
            <Right>
            </Right>
          </Header>
          <GridView
            data={this.state.groups}
            span={1}
            border={1}
            borderColor="#ccc"
            spacing={0}
            // square={false}
            flat
            key={"grid"}
            render={item => 
              <GroupCard item={item} tappedGridItem={this.tappedGridItem}/>
            }
          />
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
    // resizeMode: 'repeat', // or 'stretch'
    justifyContent: 'center',
    width:width
  }, 
});

