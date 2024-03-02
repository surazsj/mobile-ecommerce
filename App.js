import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

export default function App() {

  const [fontsLoaded]= useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
  })

  const onLayoutRootView = useCallback(async() => {

    if (fontsLoaded){
      await SplashScreen.hideAsync();
      
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
    
  }




  return (
    <View style={styles.container}>
      <Text style= {styles.textStyle}> working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    fontFamily: "bold"
  }
});
