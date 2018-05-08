import React, { Component } from 'react';
import {View, Text , TextInput,Button } from 'react-native' ;
import Footer from './Footer';


class CheckEmail extends Component{

    resetPass() {
        return <Text>RegisAtemengue</Text>;
    }

    render(){
        const {textStyle , viewStyle , textInputStyle, Reset} = styles;
        return(
            <View>
                <View style={viewStyle}>
                    <View>
                        <Text style={textStyle}>Check your Email</Text>
                        <Text>Well'sentyou a link to reset your password. Click the link in the email and entrer an new Password</Text>
                    </View>
                    <View style={Reset}>
                        <Button title="Check Email" onPress={this.resetPass} />
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
        alignItems: 'center',
        alignContent:'flex-end',
        marginBottom: 10,
        marginTop: 30
    }



};

export default CheckEmail;