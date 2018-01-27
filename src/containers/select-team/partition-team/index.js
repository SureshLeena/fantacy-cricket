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
    List,
    ListItem,
    CheckBox
} from 'native-base';
import getTheme from '../../../../native-base-theme/components';
import platform from '../../../../native-base-theme/variables/platform';
import * as AppColors from '../../../themes/color-codes';
import * as AppImageContants from '../../../constants/app-image-constants';
import * as RouterContants from '../../../constants/router-constants';
import { NavigationActions } from 'react-navigation';

const { width, height } = Dimensions.get('window');

import GridView from 'react-native-flex-grid-view'

export default class TeamPartitionScreen extends Component {
  constructor(props){
        super(props);
       this.state = {
          data:[],
          selectedItem:{}
       }

       this.listItemsClicked = this.listItemsClicked.bind(this);
       this.getPartitionList = this.getPartitionList.bind(this);
       this.onBackButtonTapped = this.onBackButtonTapped.bind(this);
       this.getCheckboxState = this.getCheckboxState.bind(this);
  }
  componentDidMount(){
    this.getPartitionList();
  }
  componentWillReceiveProps(nextProps){
    
  }  
  getPartitionList(){
    var partions = [];
   
    for(var i=0; i<10; i++){
      var data = {
          batsman:3,
          bowlers:3,
          allRounder:4,
          wktKeeper:1
      }
      partions.push(data);
    }
    this.setState({data:partions})
}
  onBackButtonTapped(){
    this.props.navigation.goBack()
  }
  listItemsClicked(item){
    this.setState({selectedItem:item});
    // if(this.props.partitionItemTapped){
    //   this.props.partitionItemTapped(item);
    // }
   
    // this.props.navigation.navigate(RouterContants.BATSMAN_LIST_SCREEN_ROUTER_NAME)
  }
  getCheckboxState(item){
    if(this.state.selectedItem == item){
      return true;
    }else{
      return false;
    }
  }
  render() {
    // alert(JSON.stringify(this.state.data));
    
    return (
      <StyleProvider style={getTheme(platform)}>
         <View style={styles.container}>
            <Image source={AppImageContants.BLUE_PATTERN_BACKGROUND} style={styles.backgroundImage} resizeMode="repeat"/>
      
            <Container style={styles.content}>      
            <Header>
              <Left>
                <Button onPress={this.onBackButtonTapped} transparent>
                  <Icon name='arrow-back' />
                </Button>
              </Left>
              <Body>
                <Title>PARTITION</Title>
              </Body>
              <Right>
              </Right>
            </Header> 
            <GridView
                data={this.state.data}
                span={2}
                border={1}
                borderColor={AppColors.LINE_COLOR}
                spacing={0}
                square
                // flat
                // style={styles.gridView}
                key={"grid"}
                render={item => 
                  <View style={[styles.itemContainer]}>
                    <TouchableOpacity onPress={(e)=>this.listItemsClicked(item)} activeOpacity={0.8} style={styles.buttonStyle}>
                          {/* <View style={styles.dotImage}>
                          </View> */}
                          <CheckBox style={styles.checkboxStyle} color={AppColors.WHITE_COLOR} checked={this.getCheckboxState(item)} />
                          <View style={styles.textGroupStyle}>
                            <Text style={styles.itemName}>Batsmans : {item.batsman}</Text>
                            <Text style={styles.itemName}>Bowlers : {item.bowlers}</Text>
                            <Text style={styles.itemName}>Allrounder : {item.allRounder}</Text>
                            <Text style={styles.itemName}>Wicketkeeper : {item.wktKeeper}</Text>
                          </View>
                    </TouchableOpacity>  
                </View>}
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
    resizeMode: 'repeat', // or 'stretch'
    justifyContent: 'center',
    width:width
  },
  listItemStyle:{
    flexDirection:'column',
    alignItems:'flex-start'
  },
  dotImage:{
    backgroundColor:"#FFF",
    height:10,
    width:10,
    margin:10,
    borderRadius:5
  },
  checkboxStyle:{
    // backgroundColor:AppColors.YELLOW_COLOR,
    // color:AppColors.YELLOW_COLOR,
    margin:20
  },
  textGroupStyle:{
    margin:10
  },
  listItemRow:{
    flexDirection:'row',
    justifyContent: 'center'
  },
  buttonStyle:{
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center',
  },
  itemContainer: {
    flex: 1,
    borderRadius: 0,
    padding: 0,
    alignItems:'center',
    justifyContent: 'center'
  },
  itemName: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize:14
  },
});

