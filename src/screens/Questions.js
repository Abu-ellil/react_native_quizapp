import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { questions } from "../../assets/data";
import * as Progress from "react-native-progress";
import tw from "twrnc";

const Questions = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [progress, setProgress] = useState(questions.length);

  const progressBar = (currentQuestionIndex + 1) / progress


  const handleNext = () => {
    if (currentQuestionIndex === questions.length - 1) {
      navigation.navigate("Score", { score });
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    }
  };

  const handlePressedOption = (option) => {
    setSelectedOption(option);

    const isAnswerIsCorrect =
      questions[currentQuestionIndex].correctAnswer === option;

    setIsCorrect(isAnswerIsCorrect);
    if (isAnswerIsCorrect) {
      setScore(score + 10);
    }
  };

  return (
    <View style={tw`mt-6 p-4`}>
      <View style={tw`flex-row`}>
        <View style={tw`flex-1`}>
          <Progress.Bar
            progress={progressBar}
            width={null}
            height={20}
            color="rgb(168, 85, 245)"
          />
        </View>
      </View>

      <Text style={tw`text-2xl mb-4`}>
        {questions[currentQuestionIndex].question}
      </Text>
      {questions[currentQuestionIndex].options.map((option, index) => (
        <Pressable
          key={index}
          style={[
            tw`border-2 border-purple-500 p-4 my-2 rounded-md`,
            selectedOption === index
              ? isCorrect
                ? tw`bg-green-200 border-green-500`
                : tw`bg-red-200 border-red-500`
              : tw`bg-purple-100 `,
          ]}
          onPress={() => handlePressedOption(index)}
          disabled={selectedOption !== null}
        >
          <Text style={tw`text-lg`}>{option}</Text>
        </Pressable>
      ))}

      <Pressable
        style={tw`bg-purple-500 p-4 rounded-md mt-6`}
        onPress={handleNext}
        disabled={selectedOption === null}
      >
        <Text style={tw`text-white text-lg text-center font-bold`}>
          {currentQuestionIndex === questions.length - 1 ? "Submit" : "Next"}
        </Text>
      </Pressable>
    </View>
  );
};

export default Questions;
