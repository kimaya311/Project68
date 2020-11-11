import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
export default class FaceBookScreen extends React.Component{
    leader(){
        window.open("https://www.facebook.com"); 
     }
    render(){
        return(
            <View>
<TouchableOpacity style={styles.button} onPress={this.leader}>
    <Text> FaceBook </Text>
</TouchableOpacity>
            </View>
        )
    }
};
const styles=StyleSheet.create({
    button: {
backgroundColor:'blue',
textAlign:'center',
justifyContent:'center',
margin:350,
borderWidth:3,

    }
});