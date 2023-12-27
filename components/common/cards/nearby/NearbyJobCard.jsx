import React from 'react'
import { View, Text,Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import styles from './nearbyjobcard.style'
import { checkImageURL } from '../popular/utils'

const NearbyJobCard = ({job,handleNavigate}) => {
  return (
   <TouchableOpacity
   style={styles.container}
   onPress={handleNavigate}>
    <TouchableOpacity 
    
    style={styles.logoContainer}>
      <Image 
source ={{uri: checkImageURL(job?.employer_logo) ? job?.employer_logo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_23ZctCdgqU8FNJBopL9y1D3WH8QhVuaNH0UYLEXog&usqp=CAU&ec=48600113'}}
resizeMode='contain'
style={styles.logoImage}

/>
    </TouchableOpacity>
  <View style={styles.textContainer}>
    <Text style={styles.jobName} numberOfLines={1}>
      {job?.job_title}
    </Text>
    <Text style={styles.jobType}>
      {job?.job_employment_type}
    </Text>
  </View>
   </TouchableOpacity>
  )
}

export default NearbyJobCard