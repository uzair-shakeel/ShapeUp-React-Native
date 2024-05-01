import React from "react";
import { View, Text } from "react-native";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { SliderImages } from "../constants/slider";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Slider = () => {
  return (
    <Carousel
      data={SliderImages}
      loop={true}
      autoplay={true}
      renderItem={ItemCard}
      hasParallaxImages={true}
      sliderWidth={wp(100)}
      firstItem={1}
      autoplayInterval={3000}
      itemWidth={wp(100) - 70}
      slideStyle={{ display: "flex", alignItems: "center" }}
    />
  );
};

const ItemCard = ({ item, index }, ParallaxProps) => {
  return (
    <View style={{ width: wp(100) - 70, height: hp(25) }}>
      <ParallaxImage
        source={item}
        containerStyle={{ borderRadius: 30, flex: 1 }}
        style={{ resizeMode: "contain" }}
        parallaxFactor={1}
        {...ParallaxProps}
      />
    </View>
  );
};

export default Slider;
