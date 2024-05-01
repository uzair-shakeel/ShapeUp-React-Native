import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { bodyParts } from "../constants/slider";
// import { TouchableOpacity } from "react-native-web";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";

const BodyParts = () => {
  return (
    <View className="mx-5">
      <Text
        className="font-semibold text-gray-700 mb-3"
        style={{ fontSize: hp(3) }}
      >
        Workouts
      </Text>
      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        renderItem={({ item, index }) => (
          <BodyPartCard index={index} item={item} />
        )}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
      />
    </View>
  );
};

const BodyPartCard = ({ item, index }) => {
  return (
    <View>
      <TouchableOpacity
        className="flex justify-end mb-1"
        style={{
          width: wp(44),
          height: wp(52),
        }}
      >
        <Image
          source={item.image}
          resizeMode="cover"
          className="rounded-2xl absolute"
          style={{
            width: wp(44),
            height: wp(52),
          }}
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={{ width: wp(44), height: hp(15) }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0 rounded-b-[35px]"
        />
        <Text
          className="text-white text-center bottom-2 font-semibold"
          style={{ fontSize: hp(2.3) }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default BodyParts;
