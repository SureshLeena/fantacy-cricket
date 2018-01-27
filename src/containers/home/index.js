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
    Grid,
    Col,
    Row,
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


export default class HomeScreen extends Component {
  constructor(props){
        super(props);
        this.onMenuButtonTapped = this.onMenuButtonTapped.bind(this);
        this.loadGroupsList = this.loadGroupsList.bind(this);
        this.onSchedulebuttonTapped = this.onSchedulebuttonTapped.bind(this);
        this.onSelectPlayerTapped = this.onSelectPlayerTapped.bind(this);
        this.onLeaderBoardTapped = this.onLeaderBoardTapped.bind(this);
       
  }
  componentDidMount(){
  
    
  }
  onMenuButtonTapped(){
    this.props.navigation.navigate(RouterContants.MENU_SCREEN_ROUTER_NAME)
  }
  onSchedulebuttonTapped(){
    this.props.navigation.navigate(RouterContants.SCHEDULE_SCREEN_ROUTER_NAME)
  }
  onSelectPlayerTapped(){
    this.props.navigation.navigate(RouterContants.SELECT_TEAM_SCREEN_ROUTER_NAME)
  }
  onLeaderBoardTapped(){
    this.props.navigation.navigate(RouterContants.LEADERBOARD_SCREEN_ROUTER_NAME)
  }
  loadGroupsList(){
      var groups = [];
      for(var i=0;i<10;i++){
        groups.push(<View  style={styles.singleItemRowWithTwoElements} key={i}>
            <View  style={styles.singleItemColLeft}>
                  <Text style={styles.highlightedTextStyle}>Group</Text> 
                  <Text style={styles.suffixTextStyle}>10 members</Text> 
            </View> 
            <Text style={styles.highlightedTextStyle}>8</Text> 
          </View> );
      }
      return groups;
  }
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <View style={styles.container}>
        <Image source={AppImageContants.BLUE_PATTERN_BACKGROUND} style={styles.backgroundImage} resizeMode="repeat"/>
        <View style={styles.content}>
        <Header style={styles.navBar}>
          <Left>
            <Button onPress={this.onMenuButtonTapped} transparent>
               <Icon name='ios-menu' />
            </Button> 
          </Left>
          <Body style={styles.singleItemRow}>
            <Title >Home</Title>
          </Body>
          <Right>
          
          </Right>
        </Header>
        <Content>
        <View>
              <View  style={styles.singleItemRow}> 
                <Text style={styles.highlightedTextStyle}>January 26</Text> 
              </View>
              <View  style={styles.doubleItemRow}>
                <View style={styles.doubleItemColLeft}>
                    <Text style={styles.highlightedTextStyle}>100 DASH</Text> 
                    <Text style={styles.suffixTextStyle}>Balance</Text> 
                </View>
                <View  style={styles.doubleItemCol}>
                    <Text style={styles.highlightedTextStyle}>Rs.100000</Text> 
                    <Text style={styles.suffixTextStyle}>INR Balance</Text> 
                </View>
              </View>
              <View  style={styles.singleItemRowWithTwoElements}>
                  <View  style={styles.singleItemColLeft}>
                    <Text style={styles.highlightedTextStyle}>Overall Rank</Text> 
                    <Text style={styles.suffixTextStyle}>100000 members</Text> 
                  </View> 
                  <Text style={styles.highlightedTextStyle}>10002</Text> 
              </View> 
              {this.loadGroupsList()}    
          </View>
          </Content>
          <Footer>
          <FooterTab>
            <Button onPress={this.onSchedulebuttonTapped}>
              <Icon name="apps" />
            </Button>
            <Button onPress={this.onSelectPlayerTapped}>
               <Image source={AppImageContants.ADD_ICON} style={styles.addIconStyle}/>
            </Button>
            <Button onPress={this.onLeaderBoardTapped}>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
        </View>
        </View>
      
        
      </StyleProvider>
    );
  }
   
}

const styles = StyleSheet.create({
  // navBar : {
  //   backgroundColor: AppColors.NAVIGATION_BAR_COLOR,
  // },
  // navBarText: {
  //   color: AppColors.WHITE_COLOR,
  //   fontFamily: 'Montserrat-SemiBold',
  //   fontSize:17
  // },
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
    resizeMode: 'repeat', // or 'stretch'
    justifyContent: 'center',
    width:width
  },
  singleItemRow: {
      borderBottomWidth: 1,
      borderBottomColor: AppColors.LINE_COLOR,
      alignItems:'center',
      justifyContent: 'center',
      height:60
  },
  doubleItemRow: {
    flexDirection:"row",
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: AppColors.LINE_COLOR,
    width:width,
    height:100
  },
  singleItemRowWithTwoElements: {
    flexDirection:"row",
    borderBottomWidth: 1,
    borderBottomColor: AppColors.LINE_COLOR,
    alignItems:'center',
    justifyContent: 'space-between',
    height:60,
    padding:10
},
singleItemColLeft: {
  width:width/2,

},
  doubleItemColLeft: {
    alignItems:'center',
    justifyContent: 'center',
    width:width/2,
    height:100,
    borderRightColor:AppColors.LINE_COLOR,
    borderRightWidth:1,
    // backgroundColor:"red"
  },
  doubleItemCol: {
    alignItems:'center',
    justifyContent: 'center',
    width:width/2,
    height:100,
    // backgroundColor:"red"
  },
  highlightedTextStyle: {
    fontSize:20,
    color: '#FFF',
    fontFamily: 'Montserrat-SemiBold'
  },
  suffixTextStyle: {
    fontSize:10,
    color: '#ccc',
    fontFamily: 'Montserrat-Light'
  },
  addIconStyle:{
    height:60,
    width:60
  }
});

