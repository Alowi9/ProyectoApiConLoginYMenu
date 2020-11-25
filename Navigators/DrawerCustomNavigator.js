
import React, {Component} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';


// Screens
import {HomeScreen} from "../Screens/HomeScreen";
import {BuscarGif} from "../Screens/BuscarGif";
import {RandomGif} from "../Screens/RandomGif";
import {DrawerContentScreen} from "../Screens/DrawerContentScreen";




const Drawer = createDrawerNavigator();

export class DrawerCustomNavigator extends Component {

    constructor(props) {
        super(props);
    }

    handlerLogout = () =>{
        this.props.onLogout();
    }

    render(){
        return(
            <Drawer.Navigator 
                initialRouteName="Home"
                headerMode={'none'}
                drawerContent={props => <DrawerContentScreen onLogoutPress={this.handlerLogout} {...props}/>}
            >
                <Drawer.Screen name="Home"  component={HomeScreen}   />
                <Drawer.Screen name="Buscar" component={BuscarGif} />
                <Drawer.Screen name="Random" component={RandomGif} />
               
             
            </Drawer.Navigator>
        );
    }
    
}

