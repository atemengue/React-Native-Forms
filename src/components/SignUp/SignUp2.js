import React, {Component} from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import LinkSocial from '../SocailLInk/LinkSocial';
import Form2 from '../Forms/Form2';
import Footer from '../Footer';

const SignUp2 = () => {
    return(
        <View>
            <Text style={{ marginBottom:10, fontSize: 18 , margin:20 }}>Sign Up 2</Text>
            <LinkSocial />
            <Form2 />
            <Footer footerText={'Have an account? Login'} />            
        </View>
    );
};

export default  SignUp2;