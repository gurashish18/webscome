import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AppContext } from '../API/contextAPI'
import ProgressCircle from 'react-native-progress-circle'


const VaccineInfo = ({data}) => {
    const{darkMode, setdarkMode} = useContext(AppContext)
    return (
        <View style={{backgroundColor: '#ffffff', borderWidth: 1, borderRadius: 10, borderColor:'lightgrey', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15}}>
            {/* Bottom */}
            <View style={{alignItems: 'flex-start'}}>
                <View style={{backgroundColor: '#BEDAFF', borderRadius: 15, padding: 5, marginBottom: 5}}>
                    <Text style={{color: '#0066FF'}}>Vaccinated Professionals</Text>
                </View>
                <Text style={{color: darkMode ? '#ffffff' : '#000000'}}>In {data.city}</Text>
                <Text style={{color: 'grey'}}>{data.vaccined} of {data.total}</Text>
            </View>
            <ProgressCircle
                percent={data.percentage}
                radius={50}
                borderWidth={5}
                color="#3399FF"
                shadowColor="#999"
                bgColor="#ffffff"
            >
                <Text style={{ fontSize: 18, color: '#000000' }}>{'30%'}</Text>
            </ProgressCircle>
        </View>
    )
}

export default VaccineInfo

const styles = StyleSheet.create({})
