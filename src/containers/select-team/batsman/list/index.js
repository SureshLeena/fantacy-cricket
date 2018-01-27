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
    Item,
    Input
} from 'native-base';
import getTheme from '../../../../../native-base-theme/components';
import platform from '../../../../../native-base-theme/variables/platform';
import * as AppColors from '../../../../themes/color-codes';
import * as AppImageContants from '../../../../constants/app-image-constants';
import * as RouterContants from '../../../../constants/router-constants';
import { NavigationActions } from 'react-navigation';

const { width, height } = Dimensions.get('window');


var thisObj;
export default class BatsmanListScreen extends Component {
  constructor(props){
        super(props);
        this.state = {
          players:[],
          selectedItems:{}
        }
        this.onBackButtonTapped = this.onBackButtonTapped.bind(this);
        this.getPlayerList = this.getPlayerList.bind(this);
        this.listItemsClicked = this.listItemsClicked.bind(this);
        this.getStyle = this.getStyle.bind(this);
  }
  componentDidMount(){
    this.getPlayerList();
  }
  getPlayerList(){
    var players = [];
    for(var i=0; i<10; i++){
        var data = {
            playerName:"Player "+(i+1),
            playerId:i
        }
        players.push(data);
    }

    this.setState({players:players})
}
listItemsClicked(item){
  var oldSelectedItems = this.state.selectedItems;
  
  var itemState = oldSelectedItems[item.playerId];
  if(!itemState) {
      oldSelectedItems[item.playerId] = true;
  }
  else {
      var newState = itemState? false: true;
      oldSelectedItems[item.playerId] = newState;
  }
  // alert(JSON.stringify(oldSelectedItems));
  this.setState({
      selectedItems: oldSelectedItems,
  });
}
  onBackButtonTapped(){
    this.props.navigation.goBack()
  }

  getStyle(item) {
    try {
      alert(JSON.stringify(thisObj.state.selectedItems[item.playerId]));
        return thisObj.state.selectedItems[item.playerId]? styles.itemTextSelected : styles.itemText;
    } catch(e) {
        return styles.itemText;
    }
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
            <Title>Batsman List</Title>
          </Body>
          <Right>
          </Right>
        </Header> 
        <View searchBar>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>     
        </View>
        <List dataArray={this.state.players}
              renderRow={(item) =>
                <ListItem onPress={(e) => this.listItemsClicked(item)}>
                  <Text style={this.getStyle(item)}>{item.playerName}</Text>
                </ListItem>
              }>
            </List> 
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
  itemText: {
    // padding: 16,
    color: "#000"
},
itemTextSelected: {
    // padding: 16,
    color: AppColors.APP_THEME_COLOR,
    backgroundColor: '#f00'
},
});

