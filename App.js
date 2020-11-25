import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {DrawerDefaultNavigator} from './Navigators/DrawerDefaultNavigator';
import {DrawerCustomNavigator} from './Navigators/DrawerCustomNavigator.js';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import {DrawerContentScreen} from "./Screens/DrawerContentScreen";


import {LoginScreen} from './Screens/LoginScreen.js';
import {HomeScreen} from "./Screens/HomeScreen";
import {BuscarGif} from "./Screens/BuscarGif";
import {RandomGif} from "./Screens/RandomGif";

const Drawer = createDrawerNavigator();

export default class App extends Component {
 
  
  constructor(props){
    super(props);
    this.state = {estaLogeado:false}
}

setStateLogin(){
  this.setState({estaLogeado:true});
}

setStateLogout= () =>{
  this.setState({estaLogeado:false});
}



  render(){
    if(this.state.estaLogeado != true){
      return(
        <LoginScreen onLogin={() => this.setStateLogin()}   />

      );
    }else{
      return (
     
      <NavigationContainer>
         <DrawerCustomNavigator onLogout={this.setStateLogout}/>
      </NavigationContainer>
      
      );
    

    }
    
   
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
