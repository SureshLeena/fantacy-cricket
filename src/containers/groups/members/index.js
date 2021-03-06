
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
    Item
} from 'native-base';
import getTheme from '../../../../native-base-theme/components';
import platform from '../../../../native-base-theme/variables/platform';
import * as AppColors from '../../../themes/color-codes';
import * as AppImageContants from '../../../constants/app-image-constants';
import * as RouterContants from '../../../constants/router-constants';
import { NavigationActions } from 'react-navigation';

const { width, height } = Dimensions.get('window');


export default class GroupMembersScreen extends Component {
  constructor(props){
        super(props);
      this.state = {
        members:[]
      }
       this.listItemsClicked = this.listItemsClicked.bind(this);
       this.onBackButtonTapped = this.onBackButtonTapped.bind(this);
  }
  componentDidMount(){
    this.getMemebersList();
  }
  componentWillReceiveProps(nextProps){
    if(nextProps != this.props){
        // this.setState({data:nextProps.data.data});
    }
  }  
  getMemebersList(){
    var members = [];
    for(var i=0; i<10; i++){
        var data = {
            groupMemberName:"Group Member "+(i+1),
            groupMemberId:i
        }
        members.push(data);
    }

    this.setState({members:members})
}
  listItemsClicked(item){
   
  }
  onBackButtonTapped(){
    this.props.navigation.goBack()
  }
  render() {
    // alert(JSON.stringify(this.state.data));
    return (
        <StyleProvider style={getTheme(platform)}>
            <View style={styles.container}>
            {/* <Image source={AppImageContants.BLUE_PATTERN_BACKGROUND} style={styles.backgroundImage} resizeMode="repeat"/> */}
    
            <Container style={styles.content}>     
                <Header>
                <Left>
                    <Button onPress={this.onBackButtonTapped} transparent>
                    <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>Members List</Title>
                </Body>
                <Right>
                </Right>
                </Header> 
                <List dataArray={this.state.members}
                    renderRow={(item) =>
                        <ListItem onPress={(e) => this.listItemsClicked(item)}>
                        <Text style={styles.itemText}>{item.groupMemberName}</Text>
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
        resizeMode: 'repeat', // or 'stretch'
        justifyContent: 'center',
        width:width
      }, 
      itemText: {
        color: "#000",
        fontFamily: 'Montserrat-Light',
        fontSize:12
     },
});

