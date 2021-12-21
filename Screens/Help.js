import React, {useContext, useState} from 'react'
import {AccordionList} from "accordion-collapse-react-native";
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import {AppContext} from '../API/contextAPI'

const Help = () => {
    const {darkMode} = useContext(AppContext)
    const[questions, setquestions] = useState([
        {
            id: '1',
            title: "Lorem ipsum dolor sit amet?",
            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
        },
        {
            id: '2',
            title: "Lorem ipsum dolor sit amet?",
            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
        },
        {
            id: '3',
            title: "Lorem ipsum dolor sit amet?",
            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
        },
        {
            id: '4',
            title: "Lorem ipsum dolor sit amet?",
            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
        },
    ])
    const _head = (item) => {
        return(
            <View style={{alignItems: 'center', marginVertical: 20}}>
              <Text style={{fontSize: 20, color: darkMode?'#ffffff':'#000000'}}>{item.title}</Text>
            </View>
        );
    }
    const _body = (item) => {
        return(
            <View style={{padding:10}}>
                <Text style={{textAlign: 'center', fontSize:18, color: 'grey'}}>{item.body}</Text>
            </View>
        );
    }
    return (
        <View style={{flex:1, backgroundColor: darkMode?'#000000':'#ffffff', alignItems: 'center'}}>
            <View style={{marginTop: 10, marginBottom: 50}}>
                <Text style={{fontSize: 24, color: darkMode?'#ffffff':'#000000', fontWeight: 'bold'}}>Help and FAQs</Text>
            </View>
            <View>
                <AccordionList
                    list={questions}
                    header={_head}
                    body={_body}
                    keyExtractor={item => `${item.id}`}
                />
            </View>
        </View>
    )
}

export default Help

const styles = StyleSheet.create({})
