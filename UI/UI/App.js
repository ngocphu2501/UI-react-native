/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ButtonComponent, { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Keyboard,
  KeyboardAvoidingView
} from 'react-native';
//khung view
class ViewColoredBoxes extends Component {
  render() {
    return (
      <View style={styles.view1}>
        <View style={styles.view2} />
      </View>
    );
  }
}
//textinput
class UselessTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props}
        editable = {true}
        maxLength = {100}
      />
    );
  }
}
//1 state button
class OnestateButton extends Component{
    render(){
        return(
            <View style={{flexDirection:'row'}}>
              <CircleButton style={styles.circle} text="0">
              </CircleButton>
              <RoundButton style={styles.round} text="Device(s) connected">
              </RoundButton>
            </View>
    );
  }
}
//keyboard
class Example extends Component {
  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow () {
    alert('Keyboard Shown');
  }

  _keyboardDidHide () {
    alert('Keyboard Hidden');
  }
    render() {
        return (
          <TextInput
            onSubmitEditing={Keyboard.dismiss}
          />
        );
      }
    }

//xuat
export default class App extends Component<{}> {
   constructor(props) {
      super(props);
      this.state = {
        text: 'Type a message',
      };
    }
  render() {
    return (
      <View>
           <KeyboardAvoidingView behavior="padding">
          <ViewColoredBoxes></ViewColoredBoxes>
          <OnestateButton></OnestateButton>

        <View style={styles.textinput}>
               <UselessTextInput
                 multiline = {true}
                 numberOfLines = {2}
                 onChangeText={(text) => this.setState({text})}
                 value={this.state.text}
               />
        </View>

        <Button
          onPress={() => {}}
          title="Send"
          color="#239AF8"
        />
      </KeyboardAvoidingView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
    view1:{height: 45,},
    view2:{backgroundColor: '#841584', flex: 1},
    textinput:{

        borderBottomColor: '#000000',
        borderBottomWidth: 1 },
    circle:{

        height:50,width:50,
        paddingTop: 10,
        paddingLeft: 10,
    },
    round:{
        height:50,
        width: 40,
        marginTop:5,
        flex: 1,
        padding: 10,
    },


});
