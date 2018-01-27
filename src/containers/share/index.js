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

export default class ShareScreen extends Component {
  constructor(props){
        super(props);
        this.onBackButtonTapped = this.onBackButtonTapped.bind(this);
  }
  componentDidMount(){
  
    
  }
  onBackButtonTapped(){
    this.props.navigation.goBack()
  }
  render() {
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
                      <Title>Share & Earn</Title>
                  </Body>
                  <Right>
                  </Right>
                </Header> 
                <View style={styles.shareItems}>
                   <Text style={styles.titleText}>Share Referal Code</Text>
                   <Text style={styles.referalText}>ABCDEFGH</Text>
                   <View style={styles.buttonsView}>
                      <Button style={styles.buttonStyle} onPress={this.onBackButtonTapped}>
                         <Text style={styles.titleText}> Copy </Text>
                      </Button>
                      <Button style={styles.buttonStyle} onPress={this.onBackButtonTapped}>
                        <Text style={styles.titleText}> Share </Text>
                      </Button>
                   </View>
                </View>
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
  shareItems: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  buttonsView: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding:20
  }, 
  buttonStyle: {
    padding:20,
    margin:20
  }, 
  titleText: {
    color: "#FFF",
    fontFamily: 'Montserrat-Light',
    fontSize:15,
    padding:20
  },
  referalText: {
    color: "#FFF",
    fontFamily: 'Montserrat-SemiBold',
    fontSize:20
  },
});

