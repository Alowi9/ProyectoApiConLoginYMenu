import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import {
     StyleSheet, 
     Text, 
     View ,
    SafeAreaView,
    ScrollView,

    TouchableOpacity,
    ImageBackground,
    TextInput,
    Button,
    Image} from 'react-native';

import axios from 'axios';

export class BuscarGif extends Component {

    state = {
        response: [],
        estadoR: false
        
        }


        handlerBuscar(t){
    
            var buscar = t;
            this.setState({value : buscar });
          
          }
          
          handlerCLick = () =>{
          
            var buscar = this.state.value;
          
           if(buscar == null ){
            axios.get("https://api.giphy.com/v1/gifs/translate?api_key=Jz1qJGUuTBQ3u62SHnq27jZce8Hy9Uz2&s=counter-strike"
            )
            .then(
              dato => {
                console.log( dato.data);
          
                this.setState({
                  response: dato.data,
                  estado: true
                })
                console.log(this.state)
          
              });
          
           }else{
          
            axios.get("https://api.giphy.com/v1/gifs/translate?api_key=Jz1qJGUuTBQ3u62SHnq27jZce8Hy9Uz2&s="+buscar
            )
            .then(
              dato => {
                console.log( dato.data);
          
                this.setState({
                  response: dato.data,
                  estado: true
                })
                console.log(this.state)
          
              });
            }
          }
  
  
    render(){
      
        if(this.state.estado != true) {
            return(  
            
        <View style={styles.container}>

            <Text 
              style={styles.text1}
              >Busca un gif a gusto
            </Text>
          <TextInput 
              style={styles.input} placeholder='Ej: Arkanoid'
              onChangeText={this.handlerBuscar.bind(this)}>
          </TextInput>
          <Button
              style={styles.button}  color="#f194ff" title="CLick aca :D "
              onPress={this.handlerCLick.bind(this)}/> 
             
         

        </View>
            );
        }else {

            return(
                <View style={styles.container}>
                     
    
           <Text 
              style={styles.text1}
              >Busca un gif a gusto
          </Text>
          <TextInput 
              style={styles.input} placeholder='Ej: Arkanoid'
              onChangeText={this.handlerBuscar.bind(this)}>
          </TextInput>
          <Button
              style={styles.button} color="#f194ff" title="CLick aca :D "
              onPress={this.handlerCLick.bind(this)}/> 
        
          <Image
              style={styles.logo}
              source={{uri:this.state.response.data.images.original.url}}
          />    
          
        <Text 
            style={styles.text}
            >Tipo: {this.state.response.data.type}
        </Text>

        <Text 
            style={styles.text}
            >Titulo: {this.state.response.data.title}
        </Text>

        <Text 
            style={styles.text}
            >Creador del gif: {this.state.response.data.username}
        </Text>

        <Text 
            style={styles.text}
            >Cuando lo subio: {this.state.response.data.import_datetime}
        </Text>

        <Text 
            style={styles.text}
            >Estado: {this.state.response.meta.status}
        </Text>
    
                
    
                    <StatusBar style="auto" />
                </View>
    
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
    logo: {
        width: 250,
        height: 250,
        marginTop: 20
      },
      button:{
        backgroundColor: "#FFFFFF",
        color:'#000000'
    
      },
      container:{
          flex: 1,
          backgroundColor: "#FFFFFF",
          alignItems: 'center',
          justifyContent: 'center',
         
          
      },
      text1:{    
        fontSize: 20,
    fontWeight: "bold",
    
      },
      input:{
        height: 40,width: 100 , borderColor: 'gray', borderWidth: 1
      },
    

  });