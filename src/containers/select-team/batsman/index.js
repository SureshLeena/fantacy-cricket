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
    ListItem
} from 'native-base';
import getTheme from '../../../../native-base-theme/components';
import platform from '../../../../native-base-theme/variables/platform';
import * as AppColors from '../../../themes/color-codes';
import * as AppImageContants from '../../../constants/app-image-constants';
import * as RouterContants from '../../../constants/router-constants';
import { NavigationActions } from 'react-navigation';

const { width, height } = Dimensions.get('window');


import PlayerPlaceHolder from '../../../components/player-placeholder';
import PlayerListItem from '../../../components/player-list-item';

export default class SelectedBatsmanScreen extends Component {
  constructor(props){
        super(props);
       this.state = {
          data:props.data.data
       }

       this.listItemsClicked = this.listItemsClicked.bind(this);
  }
  componentDidMount(){
    
  }
  componentWillReceiveProps(nextProps){
    if(nextProps != this.props){
        this.setState({data:nextProps.data.data});
    }
  }  

  listItemsClicked(item){
    if(this.props.batsmanTapped){
      this.props.batsmanTapped(item);
    }
   
    // this.props.navigation.navigate(RouterContants.BATSMAN_LIST_SCREEN_ROUTER_NAME)
  }
  render() {
    // alert(JSON.stringify(this.state.data));
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container style={styles.container}>   
          <List dataArray={this.state.data}
              renderRow={(item) =>
                <ListItem onPress={(e) => this.listItemsClicked(item)}>
                  {/* <PlayerPlaceHolder/> */}
                  <PlayerListItem/>
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
    backgroundColor: AppColors.TRANSPARENT_COLOR,
    justifyContent: 'center',
  }
});

