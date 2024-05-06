import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import tw from 'twrnc'

const Score = ({navigation}) => {
    const route = useRoute()
    const {score} = route.params
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Image
        style={tw.style(tw`h-3/6`, { aspectRatio: 1 })}
        source={
          score >= 20
            ? require("../../assets/images/undraw_Winners_re_wr1l.png")
            : require("../../assets/images/undraw_feeling_blue_4b7q.png")
        }
      />

      <Text>
        {score >= 20
          ? "Congratulations your score is " + score + " points"
          : "Your score is " + score + " points Better luck next time"}
      </Text>

      <Pressable style={tw`bg-purple-500 mt-10 px-6 py-1 rounded`} onPress={() => navigation.navigate("Splash")}>
        <Text style={tw`text-white text-lg`}>Play Again</Text>
      </Pressable>
    </View>
  );
}

export default Score