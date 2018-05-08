import React, { Component } from 'react';
import {View, Text , TextInput,Button } from 'react-native' ;
import Footer from './Footer';


class Password extends Component{

    resetPass() {
        return <Text>RegisAtemengue</Text>;
    }

    render(){
        const {textStyle , viewStyle , textInputStyle, Reset} = styles;
        return(
            <View>
                <View style={viewStyle}>
                    <View>
                        <Text style={textStyle}>Forget Password?</Text>
                        <Text>Well'send you a link to reset it.</Text>
                        <TextInput style={textInputStyle} placeholder="Registered Email" underlineColorAndroid = "transparent" />
                    </View>
                    <View style={Reset}>
                        <Button title="Reset" onPress={this.resetPass} />
                    </View>
                </View>
                <Footer footerText={'Know your Password? Log in'} />
            </View>
        );
    }
}

const styles = {
    textStyle: {
        fontSize: 22,
        marginBottom: 10 ,
        
        
    },
    viewStyle: {
        margin: 20
    },

    textInputStyle: {
        borderTopWidth: 1 ,
        borderLeftWidth: 1 , 
        borderRightWidth: 1 ,
        borderBottomWidth: 1,
        marginTop: 10,
        marginBottom: 5 ,
        paddingLeft: 10,
        height:40
    },

    Reset: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        alignContent:'flex-end'
    }



};

export default Password;