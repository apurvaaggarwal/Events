/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity
} from 'react-native';


var {height, width} = Dimensions.get('window');

export default class Home extends Component{
  render() {
      const { navigate } = this.props.navigation
    return (
      <ImageBackground      source={require('../../img/Background.png')}
      style={styles.container}>
    <ImageBackground      source={require('../../img/overlay.png')}
      style={styles.container}>
   
      <View style={{flex:0.4}}>
        
      </View>

      <View style={{flex:0.6,justifyContent:'space-around'}}>
        <View>
<Text style={{color:'white', textAlign:'center',fontWeight:'normal',fontSize:20,marginRight:40}}>I am an</Text>
<Text style={{color:'white', textAlign:'center',fontWeight:'bold',fontSize:50}}>Organiser</Text>
</View>
     <View style={{flexDirection: 'row', justifyContent:'space-around',
     width:width-80,alignItems:'center',alignSelf:'center',alignContent:'center'}}>
        <TouchableOpacity   onPress={() => navigate("ScreenTwo", {screen: "Screen Two"})}> 
           <ImageBackground  source={require('../../img/Group2.png')} style={{width: 150, height: 150}}>
        <Text style={{color:'white',textAlign:'center',marginTop:115}}>Participant</Text></ImageBackground>
              </TouchableOpacity>
        <TouchableOpacity   onPress={() => navigate("ScreenTwo", {screen: "Screen Two"})}> 
        <ImageBackground style={{width: 150, height: 150,marginTop:10}} source={require('../../img/Group1.png')}>
        <Text style={{color:'white',textAlign:'center',marginTop:110}}>Judge</Text></ImageBackground>
              </TouchableOpacity>
         </View>
         <TouchableOpacity   onPress={() => navigate("ScreenTwo", {screen: "Screen Two"})} 
         style={{justifyContent:'center',alignItems:'center',marginLeft:20}}>
           <Image style={{width: width-10, height: 100}} source={require('../../img/info.png')}/>
       </TouchableOpacity>
         </View>    
           </ImageBackground>     
    </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
   
  },
  backgroundImage: {
    // flex: 1,
    // width: null,
    // height: null,
    // resizeMode: 'cover'
    flex: 1,
    width: undefined,
    height: undefined,

   
},
});
