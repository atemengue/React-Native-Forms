import React, { Component } from 'react';
import { View, Text  } from 'react-native';
import Footer from '../Footer';
import LinkSocial from '../SocailLInk/LinkSocial';
import Form1 from '../Forms/Form1';

const Login1 = () => { 
    const { buttonStyle , ortherView } = styles;
    return(
        <View>
            <Text style={{ marginBottom:10, fontSize: 18 , margin:20 }}>Log In2</Text>
            <LinkSocial />
            <View style={ buttonStyle, ortherView}>
                <Text style={{borderBottomWidth:2 , width:80 }}></Text>
                <Text style={{paddingLeft: 15 , paddingRight: 15}}>OR</Text>
                <Text style={{borderBottomWidth:2 , width:80 }}></Text>
            </View>
            <Form1 />
            <Footer footerText={'Don\'t have an account? Sign UP'} />
        </View>
    );
};

const styles = {
    
    textStyle: {
        fontSize:18,
        marginBottom: 10
    },

    ortherView: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
        marginTop:10,
    }
};

export default Login1;