import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
export default class InstagramScreen extends React.Component{
 leader(){
    window.open("https://www.instagram.com"); 
 }
    render(){
        return(
            <View>
<TouchableOpacity style={styles.button} onPress={this.leader}>
    <Text> Instagram </Text>
</TouchableOpacity>
            </View>
        )
    }
};
const styles=StyleSheet.create({
    button: {
backgroundColor:'orange',
textAlign:'center',
justifyContent:'center',
margin:350,
borderWidth:3,

    }
});