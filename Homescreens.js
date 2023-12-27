import React, { useState } from 'react';
import { SafeAreaView,View ,ScrollView} from 'react-native';
import { Welcome,Popularjobs,Nearbyjobs,ScreenHeaderBtn } from './components';
import { COLORS, icons, images, SIZES } from "./constants";

import menu from './assets/menu.png'

import person from './assets/person.png'
import { useNavigation } from '@react-navigation/native';
const Homescreens = () => {
  const [searchTerm,setSearchTerm] = useState('')
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
    <View style={{padding:20,flexDirection:'row',width:'100%',backgroundColor:COLORS.lightWhite,justifyContent:'space-between'}}>
    <ScreenHeaderBtn iconUrl={menu}/>
    <ScreenHeaderBtn iconUrl={person}/>
    </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex:1,padding:SIZES.medium}}>
          <Welcome searchTerm={searchTerm} setSearchTerm={setSearchTerm}
          
          handleClick={()=>{
            if(searchTerm){
navigation.navigate(`search`,{id:})
            }
          }}
           />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
      </SafeAreaView>
  );
}

export default Homescreens;
