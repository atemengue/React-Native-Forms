import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Form1 from '../Forms/Form1';
import Footer from '../Footer';

const  Login1 = () => {
    return(
        <View>
            <Text style={{ marginBottom:10, fontSize: 18 , margin:20 }}>Log In1</Text>
            <Form1 />
            <Footer footerText={'Don\'t have an account? Sign UP'} />
        </View>
    );
};

export default Login1;