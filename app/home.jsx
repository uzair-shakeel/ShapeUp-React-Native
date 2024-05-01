import React from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native-web";
import Profile from "../assets/images/3.jpg";
// import Ionicons from "react-native-vector-icons/dist/Ionicons";
import { Ionicons } from "@expo/vector-icons";
import Slider from "../components/Slider";
import BodyParts from "../components/BodyParts";

const Home = () => {
  return (
    <SafeAreaView className="flex flex-1 bg-white space-y-5" edges={["top"]}>
      <StatusBar style="dark" />

      <View className="flex-row items-center justify-between w-screen px-4">
        <View className="space-y-2">
          <Text className="font-bold text-gray-700 text-[35px]">READY TO</Text>
          <Text className="font-bold  text-[35px] text-blue-600">WORKOUT</Text>
        </View>
        <View className="flex justify-center space-y-2 items-center ">
          <Image source={Profile} className="h-14 w-14 rounded-full" />
          <View className="bg-blue-200  rounded-full p-2">
            <Ionicons name="notifications" size={22} color="#1E88E5" />
          </View>
        </View>
      </View>
      <View>
        <Slider />
      </View>
      <View className="flex-1">
        <BodyParts />
      </View>
    </SafeAreaView>
  );
};

export default Home;
