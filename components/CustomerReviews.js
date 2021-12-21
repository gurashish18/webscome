import React, { useContext } from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import { services } from '../API/api'
import { AppContext } from '../API/contextAPI'

const CustomerReviews = () => {
    const{darkMode} = useContext(AppContext)
    return (
        <View>
            <Text style={{color: darkMode?'#ffffff':'#000000',fontSize: 24, marginLeft: 20, fontWeight: 'bold'}}>What our customers say</Text>
            {services.customers.map((s) => (
                    <View key={s.id} style={styles.item2}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <Image source={s.image}/>
                            <View style={{maxWidth: 200, margin: 10}}>
                                <Text style={{color: darkMode?'#ffffff':'#000000',fontSize: 20, fontWeight: 'bold'}}>{s.name}</Text>
                                <Text style={{color: 'grey'}}>{s.review}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{fontSize: 20, color: darkMode?'#ffffff':'#000000'}}>{s.stars}</Text>
                            <Image source={require('../assets/star.png')}/>
                        </View>
                    </View>
        ))}
        </View>
    )
}

export default CustomerReviews

const styles = StyleSheet.create({
    item2:{
        padding: 10,
        margin: 5,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
})
