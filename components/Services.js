import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native'
import { data } from '../API/api'
import { useNavigation } from '@react-navigation/native'
import { AppContext } from '../API/contextAPI'


const WINDOW_WIDTH = Dimensions.get("window").width
const CARD_WIDTH = Math.round(WINDOW_WIDTH)


const Services = ({data}) => {
  const {darkMode, setdarkMode} = useContext(AppContext)
  const navigation = useNavigation();
    return (
        <View>
        {data.map((s) => (
            <TouchableOpacity key={s.id} style={styles.card_container} onPress={() => navigation.navigate(s.dest)}>
              <Image source={s.imageuri} style={styles.Image} />
              <Text style={{color: darkMode?'#ffffff':'#000000'}}>{s.title}</Text>
            </TouchableOpacity>
        ))}
      </View>
    )
}

export default Services

const styles = StyleSheet.create({
  card_container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    height: 80,
    width: CARD_WIDTH,
    borderRadius: 10,
    margin: 5,
  },
Image: {
    height: 60,
    resizeMode: 'contain',
  }
})
