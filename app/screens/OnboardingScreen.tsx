import { ScrollView, View } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FlatList } from 'react-native';
import CaruselItem from '../components/CarouselItem';
import { CarouselDataProps } from '../types/CaruselDataProps';
import { Button } from 'react-native-paper';
import { ParamListBase, useFocusEffect, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import  {Colors} from '../colors'
import { Routes } from '.';

const OnboardingScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onboardingData: CarouselDataProps[] = [
    {
      title: 'Gain total control\n of your money',
      description: 'Become your own money manager\n and make every cent count',
      imageSource: require('../assets/onboarding_illustration_1.png'),
      index: 0
    },
    {
      title: 'Know where your\n money goes',
      description: 'Track your transaction easily,\nwith categories and financial report ',
      imageSource: require('../assets/onboarding_illustration_2.png'),
      index: 1
    },
    {
      title: 'Planning ahead',
      description: 'Setup your budget for each category\nso you in control',
      imageSource: require('../assets/onboarding_illustration_3.png'),
      index: 2
    }
  ]
  const flatlistRef = useRef<FlatList>(null)
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  useEffect(() => {
    if (selectedIndex < onboardingData.length) {
      flatlistRef?.current?.scrollToIndex({ animated: true, index: selectedIndex })
    } else {
      navigation.navigate(Routes.SignupScreen.toString())
    }
  }, [selectedIndex])

  useFocusEffect(
    useCallback(() => {
      setSelectedIndex(0);
      return () => {
      };
    }, [navigation])
  );

  return (
    <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
      <View>
        <FlatList
          ref={flatlistRef}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={onboardingData}
          horizontal
          onViewableItemsChanged={({ viewableItems }) => {
            if (viewableItems !== null && viewableItems !== undefined && viewableItems.length > 0) {
              setSelectedIndex(viewableItems[0].index as number)
            }
          }}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 100,
            minimumViewTime: 100
          }}
          renderItem={({ item, index }) => {
            return (<CaruselItem item={item} index={index} />)
          }}
        />
      </View>
      <View style={{ flex: 1, marginVertical: 28 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
          {onboardingData.map(({ index }) => {
            return (
              <View
                key={index.toString()}
                style={{
                  width: index === selectedIndex ? 16 : 8,
                  height: index === selectedIndex ? 16 : 8,
                  borderRadius: index === selectedIndex ? 8 : 4,
                  backgroundColor: index === selectedIndex ? Colors.primaryColor : "#EEE5FF",
                  marginHorizontal: 8
                }} />
            )
          })}
        </View>
        <Button
          onPress={() => {
            setSelectedIndex((prevIndex) => prevIndex + 1)
          }}
          mode='contained'
          style={{ marginHorizontal: 20, marginTop: 30, borderRadius: 16, backgroundColor: Colors.primaryColor }}>Signup</Button>
        <Button
          textColor={Colors.primaryColor}
          onPress={() => {
            navigation.navigate(Routes.LoginScreen.toString())
          }}
          mode='contained-tonal'
          style={{ marginHorizontal: 20, marginTop: 16, borderRadius: 16, backgroundColor: "#EEE5FF" }}>Login</Button>
      </View>
    </ScrollView>
  )
}

export default OnboardingScreen