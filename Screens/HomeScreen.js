import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, ImageBackground , Button} from 'react-native';
import { Linking } from 'react-native';

//const image = { uri: "https://media.playstation.com/is/image/SCEA/25yearsofplay_wallpaper_mobile_blue?$native_nt$"};

export class HomeScreen extends Component {

  


    render(){
        return(
            <View style={styles.container}>
              
                <Text>Bienvenid@ a AlowGIF</Text>
                
                <Text>Si deseas un gif por busqueda toca  </Text>
                <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('http://google.com')}>
  aqui
</Text>




                
                <Text>Si deseas un gif totalmente random toca aqui </Text> 
              
                
                <StatusBar style="auto" />
               
            </View>
        );
    }
    
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: "center",
        justifyContent: "center"
      },
  });