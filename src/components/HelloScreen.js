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
    ScrollView
} from 'react-native';


var { height, width } = Dimensions.get('window');
var name = "name";
export default class HelloScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { text: "" };
    }

    render() {
           const { state, navigate } = this.props.navigation;


           if(state.params.screen != undefined) {
               name = state.params.name
           }
        return (
            <ImageBackground source={require('../../img/Screen.png')}
                style={styles.container}>



                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 40 }}>Hello name</Text>
                    <View>
                        <Text style={{ color: 'white', fontWeight: 'normal', fontSize: 20, marginTop: 10 }}>What are we calling</Text>
                        <Text style={{ color: 'white', fontWeight: 'normal', fontSize: 20 }}>this event?</Text>
                    </View>
                    <TextInput autoFocus={true} onChangeText={(text) => this.setState({ text })}
                        value={this.state.text} style={{
                            backgroundColor: 'white', color: 'black',
                            textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginTop: 10, paddingVertical: 20
                        }}></TextInput>

                    <TouchableOpacity onPress={() => navigate("CarouselScreen", { screen: "CarouselScreen"})}
                        style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 20, marginTop: 10 }}>
                        <Image style={{ width: width - 10, height: 100 }} source={require('../../img/blankButton.png')} />
                    </TouchableOpacity>
                </ScrollView>
            </ImageBackground>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center'



    },
    contentContainer: {

        flexGrow: 1, justifyContent: 'center'

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
