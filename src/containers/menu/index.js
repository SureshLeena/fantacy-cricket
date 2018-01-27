import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
    Row,
    Col
} from 'native-base';
import getTheme from '../../../native-base-theme/components';
import platform from '../../../native-base-theme/variables/platform';
import * as AppColors from '../../themes/color-codes';
import * as AppImageContants from '../../constants/app-image-constants';
import * as RouterContants from '../../constants/router-constants';
import { NavigationActions } from 'react-navigation';
// import GridView from 'react-native-super-grid';
import GridView from 'react-native-flex-grid-view'
const { width, height } = Dimensions.get('window');

export default class MenuScreen extends Component {
  constructor(props){
        super(props);
        this.state = {
            items:["Home", "Schedule", "Groups", "Leaderboard", "Wallet", "Rewards", "Settings", "Share & Earn", "Game Rules", "Terms"]
        }
        this.onCloseMenuButtonTapped = this.onCloseMenuButtonTapped.bind(this);
        this.loadGridItems = this.loadGridItems.bind(this);
        this.tappedGridItem = this.tappedGridItem.bind(this);
  }
  componentDidMount(){
  
  }

  tappedGridItem(item){
    // alert(item);
    switch(item){
      case "Home":{
        this.props.navigation.goBack()
        // this.props.navigation.navigate(RouterContants.HOME_SCREEN_ROUTER_NAME)
        break;
      }
      case "Schedule":{
        this.props.navigation.navigate(RouterContants.SCHEDULE_SCREEN_ROUTER_NAME)
        break;
      }
      case "Groups":{
        this.props.navigation.navigate(RouterContants.GROUPS_SCREEN_ROUTER_NAME)
        break;
      }
      case "Leaderboard":{
        this.props.navigation.navigate(RouterContants.LEADERBOARD_SCREEN_ROUTER_NAME)
        break;
      }
      case "Wallet":{
        this.props.navigation.navigate(RouterContants.WALLET_SCREEN_ROUTER_NAME)
        break;
      }
      case "Rewards":{
        this.props.navigation.navigate(RouterContants.REWARD_SCREEN_ROUTER_NAME)
        break;
      }
      case "Settings":{
        this.props.navigation.navigate(RouterContants.SETTINGS_SCREEN_ROUTER_NAME)
        break;
      }
      case "Share & Earn":{
        this.props.navigation.navigate(RouterContants.SHARE_SCREEN_ROUTER_NAME)
        break;
      }
      case "Game Rules":{
        this.props.navigation.navigate(RouterContants.GAME_RULES_SCREEN_ROUTER_NAME)
        break;
      }
      case "Terms":{
        this.props.navigation.navigate(RouterContants.TERMS_SCREEN_ROUTER_NAME)
        break;
      }
    }

  }


  loadGridItems(){
    var gridDOM = [];
    //  for(var i=0; i<this.state.items.length; i=i+2){
    //     var leftItem = this.state.items[i];
    //     var rightItem = this.state.items[i+1];
    //     gridDOM.push(<Row size={20} style={styles.gridItem} key={i}>
    //             <Col size={50} style={styles.gridItemText} key={leftItem}> 
    //                 <TouchableOpacity onPress={this.tappedGridItem} activeOpacity={0.8} style={styles.buttonStyle} ref={leftItem}>
    //                     <Text style={styles.gridItemText}>{leftItem}</Text>
    //                 </TouchableOpacity>
    //             </Col>
    //             <Col size={50} style={styles.gridItemText} key={rightItem}>
                  //  <TouchableOpacity onPress={this.tappedGridItem} activeOpacity={0.8} style={styles.buttonStyle} ref={rightItem}>
                  //       <Text style={styles.gridItemText}>{rightItem}</Text>
                  //   </TouchableOpacity>
    //             </Col>
    //           </Row>);
    //  }
    // gridDOM.push(<GridView
    //     itemDimension={120}
    //     items={this.state.items}
    //     style={styles.gridView}
    //     key={"grid"}
    //     renderItem={item => (
          // <View style={[styles.itemContainer]} key={item}>
          //   <TouchableOpacity onPress={(e)=>this.tappedGridItem(item)} activeOpacity={0.8} style={styles.buttonStyle} ref={item}>
          //         <Text style={styles.itemName} key={item}>{item}</Text>
          //    </TouchableOpacity>  
          // </View>
    //     )}
    //   />);

    gridDOM.push( <GridView
      data={this.state.items}
      span={2}
      border={1}
      borderColor={AppColors.LINE_COLOR}
      spacing={0}
      square
      // flat
      // style={styles.gridView}
      key={"grid"}
      render={item => 
        <View style={[styles.itemContainer]} key={item}>
        <TouchableOpacity onPress={(e)=>this.tappedGridItem(item)} activeOpacity={0.8} style={styles.buttonStyle} ref={item}>
              <Text style={styles.itemName} key={item}>{item}</Text>
         </TouchableOpacity>  
      </View>}
    />);
        return gridDOM;
  }
  onCloseMenuButtonTapped(){
    this.props.navigation.goBack()
  }
  render() {

    return (
      <StyleProvider style={getTheme(platform)}>
     
      <View style={styles.container}>
        <Image source={AppImageContants.BLUE_PATTERN_BACKGROUND}  />
  
        <Container style={styles.content}>    
          <Header trasparent>
            <Left>
              <Button onPress={this.onCloseMenuButtonTapped} transparent>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Menu</Title>
            </Body>
            <Right>
            </Right>
          </Header>  
          <Grid>
              {this.loadGridItems()}
          </Grid>
          {/* <View style={styles.verticleLine}>

          </View> */}
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
    resizeMode: 'stretch', // or 'stretch'
    justifyContent: 'center',
    width:width
  },
  gridItem: {
      borderBottomWidth: 1,
      borderBottomColor: AppColors.WHITE_COLOR,
      alignItems:'center',
      justifyContent: 'center'
  },
  gridItemText: {
    alignItems:'center',
    justifyContent: 'center',
    padding:20
  },
  verticleLine: {
      width: 1,
      height: height,
      backgroundColor: '#FFF',
      position: 'absolute',
      top: 64,
      left: width/2,
  },
  buttonStyle:{
    // backgroundColor:AppColors.WHITE_COLOR,
    justifyContent: 'center',
    alignItems:'center',
  },
  gridView: {
    paddingTop: 0,
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    // justifyContent: 'flex-end',
    borderRadius: 0,
    padding: 0,
    // height: 100,
    alignItems:'center',
    justifyContent: 'center',
    // borderBottomWidth: 1,
    // borderBottomColor: AppColors.WHITE_COLOR,
  },
  itemName: {
    // fontSize: 16,
    color: '#fff',
    // fontWeight: '600',
    fontFamily: 'Montserrat-SemiBold',
    fontSize:17
  },

});

