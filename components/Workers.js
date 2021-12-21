import React,{useContext} from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import { services } from '../API/api'
import { AppContext } from '../API/contextAPI'

const Workers = () => {
    const{darkMode} = useContext(AppContext)
    return (
        <View>
            <Text style={{color: darkMode?'#ffffff':'#000000',fontSize: 24, marginLeft: 20, fontWeight: 'bold'}}>Meet Our carpenters</Text>
                {/* <FlatList
                    horizontal={true} 
                    data={services.workers} 
                    renderItem={({item, index}) => (
                        <View style={styles.item}>
                            <Image source={item.image}/>
                            <Text style={{fontSize: 20, color: darkMode?'#ffffff':'#000000'}}>{item.name}</Text>
                            <Text style={{color: 'lightgrey'}}>{item.text}</Text>
                        </View>
                    )}
                    keyExtractor={item => item.id}    
                /> */}
                {services.workers.map((s) => (
                    <View key={s.id} style={styles.item_cont}>
                        <Image source={s.image}/>
                        <View style={{justifyContent: 'center'}}>
                            <Text style={{fontSize: 20, color: darkMode?'#ffffff':'#000000'}}>{s.name}</Text>
                            <Text style={{color: 'grey'}}>{s.text}</Text>
                        </View>
                    </View>
                ))}
        </View>
    )
}

export default Workers

const styles = StyleSheet.create({
    item_cont:{
        width: '100%',
        flexDirection: 'row',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 10
    },
})
