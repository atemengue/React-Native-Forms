import React, {Component} from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import Footer from '../Footer';
import Form3 from '../Forms/Form3';
import LinkSocial from '../SocailLInk/LinkSocial';

const SignUp4 = () => {
    return(
        <View>
            <Text style={{ marginBottom:10, fontSize: 18 , margin:20 }}>Sign Up 4</Text>
            <LinkSocial />
            <Form3 />
            <Footer footerText={'Have an account? Login'} />
        </View>
    );
};

export default  SignUp4;