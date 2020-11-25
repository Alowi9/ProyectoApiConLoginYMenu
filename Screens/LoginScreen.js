import 'react-native-gesture-handler';
import React,{Component} from 'react';
import { View, StyleSheet, Button } from 'react-native';
import * as Google from 'expo-google-app-auth'



export class LoginScreen extends Component {

  async  signInWithGoogle() {
        try {
          const result = await Google.logInAsync({
           // behavior: 'web',
          // iosClientId: IOS_CLIENT_ID,
            androidClientId: "482812482871-eobtouf410mda76h92841ug3qeqj19vg.apps.googleusercontent.com",
            scopes: ['profile', 'email'],
          });

          if (result.type === 'success') {
            try {
                this.props.onLogin();
            } catch (error){
                console.log("Something happened " + error);
            }
        } else {
            return { cancelled: true };
        }

        } catch (e) {
            return { error: true };
        }
 }



    render(){

       
            return (
            <View style={styles.container}>
                <Button
                 onPress={() => this.signInWithGoogle()} 
                title="Ingrese con su cuenta de Google" 
                />
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
});


