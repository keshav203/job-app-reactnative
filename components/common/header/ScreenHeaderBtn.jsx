import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'
import Icon from 'react-native-vector-icons/FontAwesome';

const ScreenHeaderBtn = ({iconUrl,dimension,handlePress}) => {
  return (
    <TouchableOpacity>
      <Image style={{width:40,height:40}} source={iconUrl} />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn