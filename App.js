// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// export default class App extends Component<{}> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });


import { Platform } from "react-native";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";
import React, { Component } from 'react';

import SplashScreen from './src/containers/splash';
import RegisterScreen from './src/containers/register';
import LoginScreen from './src/containers/login';
import HomeScreen from './src/containers/home';
import MenuScreen from './src/containers/menu';

import ScheduleScreen from './src/containers/schedule';
import GroupsScreen from './src/containers/groups';
import LeaderBoardScreen from './src/containers/leaderboard';
import WalletScreen from './src/containers/wallet';
import RewardScreen from './src/containers/rewards';
import SettingScreen from './src/containers/settings';
import ShareScreen from './src/containers/share';
import GameRulesScreen from './src/containers/game-rules';
import TermsScreen from './src/containers/terms';
import SelectTeamScreen from './src/containers/select-team';
import TeamPartitionScreen from './src/containers/select-team/partition-team'
import BatsmanListScreen from './src/containers/select-team/batsman/list';
import GroupMembersListScreen from './src/containers/groups/members';


const AppNavigator = StackNavigator(
	{
		SplashScreen: { screen: SplashScreen },
		RegisterScreen: { screen: RegisterScreen },
		LoginScreen: { screen: LoginScreen },
		HomeScreen: { screen: HomeScreen },
		MenuScreen: { screen: MenuScreen},
		ScheduleScreen: { screen: ScheduleScreen },
		GroupsScreen: { screen: GroupsScreen },
		LeaderBoardScreen: { screen: LeaderBoardScreen },
		WalletScreen: { screen: WalletScreen },
		RewardScreen: { screen: RewardScreen },
		SettingScreen: {screen: SettingScreen},
		ShareScreen: { screen: ShareScreen },
		GameRulesScreen: { screen: GameRulesScreen },
		TermsScreen: { screen: TermsScreen },
		SelectTeamScreen: {screen :SelectTeamScreen},
		BatsmanListScreen: {screen :BatsmanListScreen},
		TeamPartitionScreen: {screen:TeamPartitionScreen},
		GroupMembersListScreen:{screen:GroupMembersListScreen}
	},
	{
		initialRouteName: "SelectTeamScreen",
		headerMode: "none",
	}
);

export default () =>
	<Root>
		   <AppNavigator></AppNavigator>
	</Root>
   ;

