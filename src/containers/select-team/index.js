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
    Tabs,
    Tab,
    TabHeading,
    ScrollableTab,
    Footer,
    FooterTab
} from 'native-base';
import getTheme from '../../../native-base-theme/components';
import platform from '../../../native-base-theme/variables/platform';
import * as AppColors from '../../themes/color-codes';
import * as AppImageContants from '../../constants/app-image-constants';
import * as RouterContants from '../../constants/router-constants';
import { NavigationActions } from 'react-navigation';

const { width, height } = Dimensions.get('window');

import SelectedBatsman from './batsman';
import SelectedAllRounder from './all-rounder';
import SelectedWktKeeper from './wkt-keeper';
import SelectedBowler from '../select-team/bowler';
import TeamPartitionScreen from './partition-team';
import BatsmanListScreen from './batsman/list';

export default class SelectTeamScreen extends Component {
  constructor(props){
        super(props);
        this.state = {
           bowlers:{count:3, data:[]},
           batsman:{count:3, data:[]},
           allRounders:{count:4, data:[]},
           wktKeeper:{count:1, data:[]}
        }
        this.onBackButtonTapped = this.onBackButtonTapped.bind(this);
        this.onFormationbuttonTapped = this.onFormationbuttonTapped.bind(this);
        this.onSaveTapped = this.onSaveTapped.bind(this);
        this.onBalanceTapped = this.onBalanceTapped.bind(this);
        this.composePlaceholders = this.composePlaceholders.bind(this);

        this.batsmanItemTapped = this.batsmanItemTapped.bind(this);
        this.bowlerItemTapped = this.bowlerItemTapped.bind(this);
        this.allRounderItemTapped = this.allRounderItemTapped.bind(this);
        this.wktKeeperItemTapped = this.wktKeeperItemTapped.bind(this);
      
  }
  componentDidMount(){
    this.composePlaceholders();
  }
  onBackButtonTapped(){
    this.props.navigation.goBack()
  }
  onFormationbuttonTapped(){  
    this.props.navigation.navigate(RouterContants.PARTITION_TEAM_SCREEN_ROUTER_NAME)
  }
  onSaveTapped(){

  }
  onBalanceTapped(){

  }
  composePlaceholders(){
    var batsmans = [];
    for(var i=0; i<3; i++){
      var data = {
        batsmanName:"batsman "+(i+1), 
        batsmanId:""
      };
      batsmans.push(data);
    }

    var bowlers = [];
    for(var i=0; i<3; i++){
      var data = {bowlerName:"bowler "+(i+1), bowlerId:""};
      bowlers.push(data);
    }

    var allRounders = [];
    for(var i=0; i<4; i++){
      var data = {allRounderName:"all rounder "+(i+1), allRounderId:""};
      allRounders.push(data);
    }

    var wktKeepers = [];
    for(var i=0; i<1; i++){
      var data = {wktKeeperName:"wiket keeper "+(i+1), wktKeeperId:""};
      wktKeepers.push(data);
    }

    this.setState({
      bowlers:{count:3, data:bowlers},
      batsman:{count:3, data:batsmans},
      allRounders:{count:4, data:allRounders},
      wktKeeper:{count:1, data:wktKeepers}
    });
  }
  batsmanItemTapped(item){
    // alert("item");
    this.props.navigation.navigate(RouterContants.BATSMAN_LIST_SCREEN_ROUTER_NAME)
  }
  bowlerItemTapped(item){
    // alert("item");
    this.props.navigation.navigate(RouterContants.BATSMAN_LIST_SCREEN_ROUTER_NAME)
  }
  allRounderItemTapped(item){
    // alert("item");
    this.props.navigation.navigate(RouterContants.BATSMAN_LIST_SCREEN_ROUTER_NAME)
  }
  wktKeeperItemTapped(item){
    // alert("item");
    this.props.navigation.navigate(RouterContants.BATSMAN_LIST_SCREEN_ROUTER_NAME)
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
              <Title>Select Team</Title>
            </Body>
            <Right>
            </Right>
          </Header>  
          <Tabs renderTabBar={()=> <ScrollableTab />}>
            <Tab heading={ <TabHeading><Text>Batsman</Text></TabHeading>}>
              <SelectedBatsman data={this.state.batsman} batsmanTapped={this.batsmanItemTapped}/>
            </Tab>
            <Tab heading={ <TabHeading><Text>Bowler</Text></TabHeading>}>
              <SelectedBowler data={this.state.bowlers} bowlerTapped={this.bowlerItemTapped}/>
            </Tab>
            <Tab heading={ <TabHeading><Text>All Rounder</Text></TabHeading>}>
              <SelectedAllRounder data={this.state.allRounders} allRounderTapped={this.allRounderItemTapped}/>
            </Tab>
            <Tab heading={ <TabHeading><Text>Wkt Keeper</Text></TabHeading>}>
              <SelectedWktKeeper  data={this.state.wktKeeper} wktKeeperTapped={this.wktKeeperItemTapped}/>
            </Tab>
        </Tabs>
        <Footer>
          <FooterTab>
            <Button onPress={this.onFormationbuttonTapped}>
              <Text>Compose</Text>
            </Button>
            <Button onPress={this.onSaveTapped}>
              <Image source={AppImageContants.TICK_ICON} style={styles.addIconStyle}/>
            </Button>
            <Button onPress={this.onBalanceTapped}>
              <Text>Balance 100000</Text>
            </Button>
          </FooterTab>
          </Footer>
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
  },
  addIconStyle:{
    height:60,
    width:60
  }
});

