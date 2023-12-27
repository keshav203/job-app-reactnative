import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { useState } from "react";
import { StyleSheet } from 'react-native';
import { SafeAreaView, ScrollView, View } from "react-native";
import { COLORS, icons, images, SIZES } from "./constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "./components";
import menu from './assets/menu.png'

import person from './assets/person.png'
import Homescreens from './Homescreens';
import JobDetails from './components/jobdetails/[id]';
import JobSearch from './components/search/[id]';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homescreen">
      <Stack.Screen name="Homescreen" component={Homescreens}  options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Details" component={JobDetails}  options={({ route }) => ({ title: `Job Details ${route.params.id}` })}/>
        <Stack.Screen name="search" component={JobSearch}  options={({ route }) => ({ title: `Job Search}` })}/>
     
      </Stack.Navigator>
    </NavigationContainer>
  //   <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
  // <View style={{padding:20,flexDirection:'row',width:'100%',backgroundColor:COLORS.lightWhite,justifyContent:'space-between'}}>
  // <ScreenHeaderBtn iconUrl={menu}/>
  // <ScreenHeaderBtn iconUrl={person}/>
  // </View>
  //   <ScrollView showsVerticalScrollIndicator={false}>
  //     <View style={{flex:1,padding:SIZES.medium}}>
  //       <Welcome />
  //       <Popularjobs />
  //       <Nearbyjobs />
  //     </View>
  //   </ScrollView>
  //   </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
