
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


var { height, width } = Dimensions.get('window');

export default class ListItem extends Component {
// var setImage = null

    render() {
const{name,image,status,dp}=this.props
if(image == "online") {
    setImage=require('../../img/Ellipse93.png')
}
else {
    setImage=require('../../img/Ellipse97.png')
}

if(dp == "1") {
    dpImage = require('../../img/Group2278.png')
}
else if(dp == "2") {
    dpImage = require('../../img/Group2449.png')
}
else {
     dpImage = require('../../img/me.png')
}

        return (
        
   <ImageBackground source={require('../../img/cardBackground.png')}
                style={{height:undefined,width:undefined,padding:20
}}>
                <View style={{ flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'}}>
  <View style={{flexDirection:'row'}}> 
  <Image source={dpImage} />
    <View style={{marginHorizontal:10}}>
    <Text>{name}</Text>
    <Text style={{color:'grey'}}>{status}</Text>
    </View>
    </View>
<Image source={setImage} />
</View>
</ImageBackground>

)
    }
}
