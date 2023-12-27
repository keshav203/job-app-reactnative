import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import styles from './about.style'

const About = ({info}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the job</Text>
      <ScrollView style={styles.contentBox}>
        <Text style={styles.contextText}>
          {info}
        </Text>
      </ScrollView>
    </View>
  )
}

export default About