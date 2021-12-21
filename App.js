import React, {useState, useContext} from 'react';
import {SafeAreaView,StyleSheet,View,Text,Image,Button,} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider'; // npm package
import Navigation from './components/Navigation';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Context, {AppContext} from './API/contextAPI'

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false); // variable to toggle between intro screen and main screen

  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({item}) => {
    return (
      <Context>
      <View style={{flex: 1, backgroundColor: item.backgroundColor,alignItems: 'center',justifyContent: 'center'}}>
        <Image
          style={styles.introImageStyle}
          source={item.image} />
        <Text style={styles.introTextStyle}>
          {item.text}
        </Text>
      </View>
      </Context>
    );
  };


  const RenderSkipButton = () => {
    return (
      <Context>
      <View style={{paddingVertical:5, paddingHorizontal: 10, borderRadius: 10, backgroundColor: '#3284FF'}}>
        <Text style={{color: '#ffffff', fontSize: 18}}>Skip</Text>
      </View>
      </Context>
    );
  };

  const RenderNextButton = () => {
    return (
      <Context>
      <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical:5, paddingHorizontal: 10, borderRadius: 10, backgroundColor: '#3284FF'}}>
        <Text style={{color: '#ffffff', fontSize: 18}}>Next</Text>
        <Icon name="arrow-right-alt" style={{color: '#ffffff', fontSize: 18}}/>
      </View>
      </Context>
    );
  };

  const RenderDoneButton = () => {
    return (
      <Context>
      <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical:5, paddingHorizontal: 10, borderRadius: 10, backgroundColor: '#3284FF'}}>
        <Text style={{color: '#ffffff', fontSize: 18}}>Done</Text>
        <Icon name="done" style={{color: '#ffffff', fontSize: 18}}/>
      </View>
      </Context>
    );
  };

  return (
    <Context>
      {showRealApp ? (
        <Navigation />
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
          renderNextButton={RenderNextButton}
          renderSkipButton={RenderSkipButton}
          renderDoneButton={RenderDoneButton}
          dotStyle={{backgroundColor: 'lightblue'}}
          activeDotStyle={{backgroundColor: '#3284FF'}}
        />
      )}
    </Context>
  );
};

export default App;

const styles = StyleSheet.create({
  introImageStyle: {
    width: 500,
    height: 500,
    resizeMode: 'contain'
  },
  introTextStyle: {
    fontSize: 20,
    color: '#3284FF',
    textAlign: 'center',
    paddingVertical: 30,
  }
});

const slides = [
  {
    key: 's1',
    text: 'Book Professional from your mobile · Services we provide · AC Repair · Bike Service · Car Service · Carpenter · House Cleaners · Electrician · Appliance Repire.',
    title: 'Mobile Recharge',
    image: require('./assets/Service1.png'),
    backgroundColor: '#ffffff',
  },
  {
    key: 's2',
    title: 'Flight Booking',
    text: 'Book Professional from your mobile · Services we provide · AC Repair · Bike Service · Car Service · Carpenter · House Cleaners · Electrician · Appliance Repire.',
    image: require('./assets/Service2.png'),
    backgroundColor: '#ffffff',
  },
]
