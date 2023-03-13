import React from "react";
import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

interface Props extends TouchableOpacityProps {
  checked?: boolean;
  title?: string;
}

export function CheckBox({ title, checked = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex-row mb-2 mt-2 items-center "
      {...rest}
    >
      {checked ? (
        <View className=" h-8 w-8 bg-green-500 rounded-lg items-center justify-center">
          <Feather name="check" size={20} color={colors.white}></Feather>
        </View>
      ) : (
        <View className=" h-8 w-8 bg-zinc-900 rounded-lg" />
      )}

      <Text className="text-white text-base ml-3">{title}</Text>
    </TouchableOpacity>
  );
}
