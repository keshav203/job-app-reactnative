import React,{useState} from 'react'
import { View, Text ,TouchableOpacity,FlatList,ActivityIndicator} from 'react-native'

import { icons,SIZES,COLORS } from '../../../constants'
import styles from './popularjobs.style'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from '../../../hooks/useFetch'
const Popularjobs = () => {
const {data,isLoading,error}= useFetch(
  'search',
  {
    query:'React developer',
    num_pages : 1,
  }
)
  return (
    <View style={styles.container}>
     <View style={styles.header}>
      <Text style={styles.headerTitle}>Popular Jobs</Text>
      <TouchableOpacity>
        <Text style={styles.header}>Show All</Text>
      </TouchableOpacity>
     </View>
<View style={styles.cardsContainer}>
{isLoading ? (
<ActivityIndicator size='large' color={COLORS.primary} /> 
  
  ) : error ? (<Text> Something went wrong</Text>) :
  <FlatList 
  data={data}
  renderItem={({item})=>(
    console.log(item.employer_name,'emp name'),
    <PopularJobCard 
item={item}

    />
  )
}
  keyExtractor={item => item?.job_id}
  contentContainerStyle={{columnGap:SIZES.medium}}
  horizontal
  />
  
  
  }
</View>
    </View>
  )
}

export default Popularjobs