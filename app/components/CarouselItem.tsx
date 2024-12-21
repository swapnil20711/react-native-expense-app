import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { CarouselItemProps } from '../types/CaruselItemProps'

const CaruselItem: React.FC<CarouselItemProps> = ({ item }: CarouselItemProps) => {
  return (
    <View style={{ flexDirection: "column", width: Dimensions.get('screen').width }}>
      <Image style={{ alignSelf: 'center', marginTop: 32 }} source={item.imageSource} />
      <View style={{ marginTop: 40, flexDirection: "column", marginHorizontal: 44 }}>
        <Text
          style={{
            alignSelf: 'center',
            fontWeight: "bold",
            color: '#212325',
            fontSize: 36,
            textAlign: 'center'
          }}>
          {item.title}
        </Text>

        <Text
          style={{
            color: '#91919F',
            textAlign: 'center',
            marginTop: 16
          }}>{item.description}</Text>
      </View>
    </View>
  )
}

export default CaruselItem