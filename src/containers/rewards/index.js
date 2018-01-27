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
    List,
    ListItem
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
        this.state = {
          rewards:[]
        }
        this.onBackButtonTapped = this.onBackButtonTapped.bind(this);
  }
  componentDidMount(){
    this.getRewardsList();  
  }
  getRewardsList(){
    var rewards = [];
    for(var i=0; i<10; i++){
        var data = {
            reward:"Reward Details "+(i+1),
            rewardId:i
        }
        rewards.push(data);
    }

    this.setState({rewards:rewards})
  }
  onBackButtonTapped(){
    this.props.navigation.goBack()
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
                    <Title>Rewards</Title>
                </Body>
                <Right>
                </Right>
                </Header> 
                <List dataArray={this.state.rewards}
                    renderRow={(item) =>
                        <ListItem onPress={(e) => this.listItemsClicked(item)}>
                          <Text style={styles.itemText}>{item.reward}</Text>
                        </ListItem>
                    }>
                    </List> 
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
  itemText: {
    color: "#000",
    fontFamily: 'Montserrat-Light',
    fontSize:12
 },
});

