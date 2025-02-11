import { Dimensions } from "react-native";

export function useDimension() {
    const { width, height } = Dimensions.get('screen')

    return { width, height }
}