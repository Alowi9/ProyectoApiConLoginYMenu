
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



export class LogoutScreen extends Component{

    handlerLogout(){
        this.props.onLogout();
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>Estas a punto de irte de AlowiGif :C </Text>
                <Button
                    onPress={() => this.handlerLogout()}
                    title="Cerrar sesión"
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