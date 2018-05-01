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
  TouchableOpacity,
  TextInput,
  Keyboard,
  ScrollView
} from 'react-native';


var { height, width } = Dimensions.get('window');

export default class ScreenTwo extends Component {

  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    const { navigate } = this.props.navigation
    return (

      <ImageBackground source={require('../../img/Background.png')}
        style={styles.container}>
        <ImageBackground source={require('../../img/overlay.png')}
          style={styles.container}>
          <View style={{ flex: 0.4 }}>

          </View>
          <ScrollView style={{ flex: 0.6 }}>
            <View style={{ justifyContent: 'space-around' }}>
              <View>
                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'normal', fontSize: 30, marginRight: 40 }}>and my name is</Text>
                <TextInput autoFocus={true}
                  onChangeText={(text) => this.setState({ text })}
                  value={this.state.text} style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 40 }}></TextInput>
              </View>

              <TouchableOpacity onPress={() => navigate("ScreenThree", { screen: "Screen Three" ,name: this.state.text})}
                style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 20, marginTop: 20 }}>
                <Image style={{ width: width - 10, height: 100 }} source={require('../../img/continue.png')} />
              </TouchableOpacity>
            </View>
          </ScrollView>
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
    flex: 1,
    width: undefined,
    height: undefined,


  },
});
