import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

class DoubleInput extends Component {
    render () {

        const { textInputStyle } = styles;
        return(
            <View>
                <TextInput style={textInputStyle} underlineColorAndroid='transparent'  placeholder="Email" inlineImageLeft="search_icon"/>
                <TextInput style={textInputStyle}  underlineColorAndroid='transparent' placeholder="Password"/>
            </View>
        );
    }
} 

const styles = {
    textInputStyle: {
        borderTopWidth: 1 ,
        borderLeftWidth: 1 , 
        borderRightWidth: 1 ,
        borderBottomWidth: 1,
        marginTop: 5,
        marginBottom: 5 ,
        paddingLeft: 10,
        height:40
    },
};

export default DoubleInput;