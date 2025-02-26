import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff'
    },
    container_header: {
      backgroundColor: '#7d02fd',
      width: width,
      height: height * 0.13,
      alignItems: 'center',
      justifyContent: 'center'
    },
    container_search_button: {
      backgroundColor: '#fff',
      width: 250,
      height: 50,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 10,
      flexDirection: 'row',
    },
    container_input_text: {
      fontFamily: "MontserratBold"
    },
    container_icon: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    },
    container_navigation: {
      // backgroundColor: 'red',
      width: 50,
      height: 20,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    container_navigation_inactive: {
  
    },
    container_text_navigation: {
      fontSize: 10,
      fontFamily: 'MontserratBold',
      color: '#fff'
    },
    container_text_navigation_inactive: {
      fontSize: 10,
      fontFamily: 'Montserrat',
      color: '#fff'
    }
})

export default styles