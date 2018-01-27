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



export default class TeamPartitionScreen extends Component {
  constructor(props){
        super(props);
       this.state = {
          data:[]
       }

       this.listItemsClicked = this.listItemsClicked.bind(this);
       this.getPartitionList = this.getPartitionList.bind(this);
       this.onBackButtonTapped = this.onBackButtonTapped.bind(this);
  }
  componentDidMount(){
    this.getPartitionList();
  }
  componentWillReceiveProps(nextProps){
    
  }  
  getPartitionList(){
    var partions = [];
   
    var data = {
        batsman:3,
        bowlers:3,
        allRounder:4,
        wktKeeper:1
    }
   
     partions.push(data);

    this.setState({data:partions})
}
  onBackButtonTapped(){
    this.props.navigation.goBack()
  }
  listItemsClicked(item){
    // if(this.props.partitionItemTapped){
    //   this.props.partitionItemTapped(item);
    // }
   
    // this.props.navigation.navigate(RouterContants.BATSMAN_LIST_SCREEN_ROUTER_NAME)
  }
  render() {
    // alert(JSON.stringify(this.state.data));
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container style={styles.container}>   
        <Header>
          <Left>
            <Button onPress={this.onBackButtonTapped} transparent>
               <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Team Partition</Title>
          </Body>
          <Right>
          </Right>
        </Header> 
          <List dataArray={this.state.data}
              renderRow={(item) =>
                <ListItem onPress={(e) => this.listItemsClicked(item)} style={styles.listItemStyle}>
                  <View style={styles.listItemRow}>
                    <Text>Batsmans : {item.batsman}, </Text>
                    <Text>Bowlers : {item.bowlers}, </Text>
                  </View>
                  <View style={styles.listItemRow}>
                    <Text>All Rounders : {item.allRounder}, </Text>
                    <Text>Wicket Keeper : {item.wktKeeper} </Text>
                  </View>  
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
  },
  listItemStyle:{
    flexDirection:'column',
    alignItems:'flex-start'
  },
  listItemRow:{
    flexDirection:'row',
    justifyContent: 'center'
  }
});

