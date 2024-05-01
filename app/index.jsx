import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Image } from "react-native";
import Background from "../assets/images/background.jpg";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, { BounceInDown } from "react-native-reanimated";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();
  return (
    <View className="flex-1 justify-end flex">
      <StatusBar style="light" />
      <Image className="h-full w-full absolute" source={Background} />

      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={{ width: "100%", height: "70%" }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end pb-12 space-y-8"
      >
        <Animated.View
          entering={BounceInDown.delay(100).duration(700)}
          className="flex items-center"
        >
          <Text
            style={{ fontSize: 40 }}
            className="text-white font-bold tracking-wide"
          >
            Best <Text className="text-blue-600">Workouts</Text>
          </Text>
        </Animated.View>

        <Animated.View entering={BounceInDown.delay(600).duration(1000)}>
          <TouchableOpacity
            onPress={() => router.push("home")}
            className="bg-blue-800 flex items-center justify-center mx-auto rounded-full border-[1px] border-blue-200 py-3 w-[80%]"
          >
            <Text
              style={{ fontSize: 25 }}
              className=" font-semibold text-blue-100"
            >
              Less Goo!!
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
};

export default Index;
