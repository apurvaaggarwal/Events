
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    TextInput,
    ScrollView
} from 'react-native';

import ListItem from './ListItem.js'
var { height, width } = Dimensions.get('window');

export default class ListViewScreen extends Component {


    render() {
        return (
            
                <ImageBackground source={require('../../img/Rectangle715(Side).png')}
                style={{height:undefined,width:undefined}}>
                <View style={{flexDirection:'column'}}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: 15,
                    }}>
                        <Text style={{ color: 'grey' }}>15 participants </Text>
                        <Image source={require('../../img/threeDots.png')} />
                    </View>

                <Text style={{fontWeight:'bold',fontSize:35,paddingHorizontal:10}}> Brand Revival</Text>
                 <Image style={{marginLeft:20,marginVertical:10}}source={require('../../img/Rectangle653.png')} />
                 
        {/*<Image  style={{marginLeft:170,position:"absolute",width:40,left:20,top:105}}source={require('../../img/Rectangle652.png')} />*/}
                <ListItem dp = "1" name = "Ammie Haralson" status = "Logged in 15 mins ago." image = "online"/>
                   <ListItem dp = "2" name = "Jarred Dun" status = "Has expected your invite." image = "online"/>
                     <ListItem dp = "3" name = "Amrit agarwal" status = "Has finished judging." image = "offline"/>
                       
                        <View style={{height:50,width: width-width*0.60,margin:5,
                        borderBottomLeftRadius:15,alignItems:'center',justifyContent:'center',
                       backgroundColor:'#5CA8EB'}}>
                        <Text style={{color:'white'}}>Invite</Text>
                        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Judge</Text>
                        </View>
                        <View style={{height:80,width:1,position:"absolute",bottom:5,right:width-width*0.60,
                        backgroundColor:"white"}}/>
                         <View style={{height:50,width: width-width*0.63,position: "absolute", bottom: 0,margin:5,
                        borderBottomRightRadius:15,right: 0, backgroundColor:'#5CA8EB',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'white'}}>Share</Text>
                        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Score</Text>
                        </View>

              
              
                </View>
        
            </ImageBackground>)


    }

}



const styles = StyleSheet.create({
    container: {
      flex:1,alignItems:'center',justifyContent:'center'





    }
});