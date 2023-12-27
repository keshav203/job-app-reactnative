import React,{useState} from 'react'
import { View, Text,TextInput,TouchableOpacity,FlatList,Image} from 'react-native'

import styles from './welcome.style'
import { icons,SIZES } from '../../../constants'
import { useNavigation } from '@react-navigation/native'
import search from '../../../assets/search.png'
const jobTypes=['Full time ','Part time','Contractual']
const Welcome = ({searchTerm,setSearchTerm,handleClick}) => {
  const [activeJobType, setActiveJobType] = useState('Full-time');
   const navigation = useNavigation();
  return (
    <View>
     <View style={styles.container}>
      <Text style={styles.userName}>
        Hello Keshav
      </Text>
      <Text style={styles.welcomeMessage}>
        Find Your perfect job
      </Text>

     </View>
     <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput 
        style={styles.searchInput}
        value= {searchTerm}
        onChange={(text)=> setSearchTerm(text)}
        placeholder="What are you looking for?"
        />
      </View>
      <TouchableOpacity onPress={handleClick} style={styles.searchBtn}>
        <Image 
        source={search}
        resizeMode="contain"
        style={styles.searchBtnImage}
        />
      </TouchableOpacity>
     </View>
     <View style={styles.tabsContainer}>
      <FlatList 
      data={jobTypes}
      renderItem={({item})=>(
        <TouchableOpacity 
        onPress={()=>{
          setActiveJobType(item)
          navigation.navigate('search',item)
        }}
        style={styles.tab(activeJobType,item)}>
          <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={item => item}
      contentContainerStyle={{columnGap:SIZES.small}}
      horizontal
      />
     </View>
    </View>
  )
}

export default Welcome